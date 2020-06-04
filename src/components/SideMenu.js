import React,{Component} from 'react';
import {StyleSheet,Dimensions,AsyncStorage , View,Image,TouchableOpacity,ScrollView} from 'react-native';
import {ListItem,Body,Right,Text,Icon,Left,Button,Switch,Container,} from 'native-base';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import {define} from '../define.json';
import { getStorage,setStorage,postRequest,ignelemeChanged } from '../actions';
import LinearGradient from 'react-native-linear-gradient';

 class SideMenu extends Component {
	constructor(props)
	{
		super(props);
	}



   render() {

    return (
	 	<View style={styles.container}>
     		<View style={styles.logoContainer}>
          <View style={{height:50,width:300}}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#fff', '#2980b9']} style={styles.linearGradient}/>
          </View>
           <Image
            style={styles.image}
              source={{uri: 'https://www.atilimyazilim.com/logo.png'}}
            />
        </View>
        <View style={{height:30}}/>
      <View>

          
           

      <ListItem icon onPress={()=>{Actions.replace("Home",{type:'reset'}); Actions.drawerClose();}}>
        <Left>
          <Button style={{ backgroundColor: "#34495e" }}>
            <Icon active name="home" />
          </Button>
        </Left>
        <Body>
          <Text>Anasayfa</Text>
        </Body>
      </ListItem>
      <ListItem icon onPress={()=>{Actions.replace("Kelime",{type:'reset'}); Actions.drawerClose();}}>
        <Left>
          <Button style={{ backgroundColor: "#f1c40f" }}>
            <Icon active name="book" />
          </Button>
        </Left>
        <Body>
          <Text>Kelimeler</Text>
        </Body>
      </ListItem>
      <ListItem icon onPress={()=>{Actions.replace("Test",{type:'reset'}); Actions.drawerClose();}}>
        <Left>
          <Button style={{ backgroundColor: "#9b59b6" }}>
            <Icon active name="clipboard" />
          </Button>
        </Left>
        <Body>
          <Text>Testler</Text>
        </Body>
      </ListItem>
      <ListItem icon onPress={()=>{Actions.replace("Istatistik",{type:'reset'}); Actions.drawerClose();}}>
        <Left>
          <Button style={{ backgroundColor: "#3498db" }}>
            <Icon active name="stats" />
          </Button>
        </Left>
        <Body>
          <Text>İstatistikler</Text>
        </Body>
      </ListItem>
      <ListItem icon onPress={()=>{Actions.replace("Durum",{type:'reset'}); Actions.drawerClose();}}>
        <Left>
          <Button style={{ backgroundColor: "#2ecc71" }}>
            <Icon active name="pie" />
          </Button>
        </Left>
        <Body>
          <Text>Durumlar</Text>
        </Body>
      </ListItem>
      <ListItem icon onPress={()=>{alert('aa')}}>
        <Left>
          <Button style={{ backgroundColor: "#e74c3c" }}>
            <Icon active name="exit" />
          </Button>
        </Left>
        <Body>
          <Text>Çıkış Yap</Text>
        </Body>
      </ListItem>

    </View>
  </View>

    );
  }
}
var width = Dimensions.get('window').width;
var drawerWidth = 300;
var styles = StyleSheet.create({

    linearGradient: {
      flex: 1,
    },
    container: {
      	width:drawerWidth,
      	flex:1,
      	backgroundColor:'white',
    },
    image:{
    	width:100,
    	height:100,
      margin:10,
    },
    logoContainer:{
      backgroundColor:'#fff',alignItems:'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

    }

});


const mapStateToProps = ({ IslemResponse }) => {
  return {
    ignele:IslemResponse.ignele,
   };
};

const mapDispatchToProps = {
    ignelemeChanged,
};
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
