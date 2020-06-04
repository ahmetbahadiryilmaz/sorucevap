import React, {Component} from 'react';
import {Platform, StyleSheet, View,StatusBar,FlatList,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonOval from '../components/ButtonOval';
import {Text,List,ListItem,Container,Header,Content,CardItem, Right, Icon, Body,Left,Radio, Grid, Row, Col, H2, H3, Card, Button} from 'native-base';
import {ignelemeChanged, postRequest} from '../actions';
import {connect} from 'react-redux';
import SoruKart from '../components/SoruKart';
import { Actions } from 'react-native-router-flux';

  

 class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      SorularData:[],
    };

    
  }
  onPressSinavTamamla()
  {
    let SorularData = this.state.SorularData;
    let kullaniciCevap = this.props.ignele;

    for (let index = 0; index < kullaniciCevap.length; index++) {
      const element = kullaniciCevap[index];
      if(element.verilenCevap==-1)
      {
        Alert.alert('İşaretlemediğiniz soru bulunmaktadır.',"");
        return;
      }
    }
    
    let dogruSayisi = 0;
    let yanlisSayisi = 0;
    SorularData.map((sorularItem,sorularIndex)=>{
      kullaniciCevap.map((kullaniciCevapItem,kullaniciCevapIndex)=>{
         if(sorularItem.soru_id==kullaniciCevapItem.soruId)
         {
          if((sorularItem.soru_dogru_cevap_index-1) == kullaniciCevapItem.verilenCevap)
          {
            dogruSayisi++;
            kullaniciCevap[kullaniciCevapIndex].dogruMu = "dogru";
          }else{
            yanlisSayisi++;
            kullaniciCevap[kullaniciCevapIndex].dogruMu = "yanlis";
          }
        }
      })
    });

    Alert.alert(dogruSayisi+" Tane Doğru "+ yanlisSayisi + " Tane Yanlışınız bulunmaktadır.");
    Actions.pop();
  }
   
  async componentDidMount()
  {
    const SorularData = await postRequest([],"sorular.php?soru_test_id="+this.props.testId);
    this.setState({
      SorularData:SorularData,
    });
    let kullaniciCevap = [];
    SorularData.map((item,index)=>{
      kullaniciCevap.push({
        "soruId":item.soru_id,
        "verilenCevap":-1,
        "dogruMu":"bos",
      });
    });

    this.props.ignelemeChanged(kullaniciCevap);
  }
  


  render() {
    return (
      <Container>
        <Content style={styles.content}>
          {this.state.SorularData.map((item,index)=>{
           
            return(
              <SoruKart SoruData={item} SoruIndex={index+1} />
            );
            
          })}
          <Button full onPress={()=>this.onPressSinavTamamla()}>
            <Text>
              Sınavı Tamamla
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  content:{
     margin:10
  },
  cevap:{
    padding:10,
  }
});


 
const mapStateToProps = ({ IslemResponse }) => {
  return {
    ignele:IslemResponse.ignele,
   };
};

const mapDispatchToProps = {
   ignelemeChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);