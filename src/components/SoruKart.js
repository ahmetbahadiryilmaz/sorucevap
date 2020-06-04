import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import {Text,List,ListItem,Container,Header,Content,CardItem, Right, Icon, Body,Left,Radio, Grid, Row, Col, H2, H3, Card} from 'native-base';
import {ignelemeChanged, postRequest} from '../actions';
import {connect} from 'react-redux';

class SoruKart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Cevaplar:[],
        radioState:[],
    };

     
    
  }

  componentWillMount()
  {

    let CevaplarData  =  JSON.parse(this.props.SoruData.soru_cevaplar);
    let radioState=[];
    CevaplarData.map(()=>{
      radioState.push(false);
    });


    this.setState({
      Cevaplar:CevaplarData,
      radioState:radioState,
    });

  }

  onPressRadioItem(radioIndex)
  {

    let radioState = this.state.radioState;
    this.state.radioState.map((item,index)=>{
      radioState[index]=false;
    })
    radioState[radioIndex] = true;
    this.setState({
      radioState:radioState,
    });

    let kullaniciCevap = this.props.ignele;
    kullaniciCevap.map((item,index)=>{

      if(item.soruId==this.props.SoruData.soru_id)
      {
        kullaniciCevap[index].verilenCevap = radioIndex;
      }
    })
    this.props.ignelemeChanged(kullaniciCevap);

    console.log(this.props.ignele,kullaniciCevap);
    

  }

  render() {
    return (
        <Card style={styles.kutu}>
        <CardItem >
          <Grid>
            <Row>
                <H3>{this.props.SoruIndex}. Soru</H3>
            </Row>
            <Row>
                <Text style={{backgroundColor: '#ddd',flex:1,padding:10,borderRadius:3,marginTop:10}}>{this.props.SoruData.soru_adi}</Text>
            </Row>
            {this.state.Cevaplar.map((item,index)=>{
                return(
                    <Row style={styles.cevap}>
                        <Radio onPress={()=>this.onPressRadioItem(index)} selected={this.state.radioState[index]}/>
                        <Text onPress={()=>this.onPressRadioItem(index)} style={{flex:1}}> {item}</Text>
                    </Row>
                )
            })}
            
          </Grid>
        </CardItem>
     </Card>
    );
  }
}

 
const mapStateToProps = ({ IslemResponse }) => {
  return {
    ignele:IslemResponse.ignele,
   };
};

const mapDispatchToProps = {
   ignelemeChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(SoruKart);

var styles = StyleSheet.create({
    kutu:{

    },
    content:{
       margin:10
    },
    cevap:{
      padding:13,

    },
    cevapListItem:{
      backgroundColor: 'red',
    }
  });
  