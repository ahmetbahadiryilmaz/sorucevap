import React, { Component } from 'react';
import {StyleSheet,View,Alert,Image,Dimensions} from 'react-native';
import {Spinner,Form,Item,Input,Icon,ListItem,Body,CheckBox,Text,Button,Container,Header,Content,Grid,Col,Row,Left,Right} from 'native-base';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import {define} from '../define.json';
import { getStorage,setStorage,postRequest,ignelemeChanged } from '../actions';

class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			kullaniciAdi: '',
			sifre: '',
			beniHatirla:true,
			spinnerState:(<View/>),
			secure:true
		};
	}

	componentDidMount() {

		this.getUserData();
	}
	async getUserData()
	{
		const kullaniciAdi = await getStorage('kullaniciAdi').then(data=>data);
		const sifre = await getStorage('sifre').then(data=>data);
		const beniHatirla = await getStorage('beniHatirla').then(data=>data=="true");
		 
		this.setState({
			kullaniciAdi:kullaniciAdi,
			sifre:sifre,
			beniHatirla:beniHatirla,
		});

	}

	async goLogin() {

		this.setState({
			spinnerState:(<Spinner color='green' />)
		});

		var kullaniciAdi = this.state.kullaniciAdi;
		var sifre = this.state.sifre;
		var beniHatirla = this.state.beniHatirla;

		/*let body = {
			kullaniciAdi: kullaniciAdi,
			sifre: sifre,
	    }
		const data = await postRequest(body,define.loginUrl).then(data =>data);
		if(data.message!==undefined)
		{
			Alert.alert(data.message);
			this.setState({
				spinnerState:(<View/>)
			});
			return;
		}

		if(data.liste===undefined)
		{
			Alert.alert("Hata,","Kullanıcı adı veya şifre hatalı!");
			this.setState({spinnerState:(<View/>)})
			return;
		}

        var kullaniciBilgi = data;*/
		if(beniHatirla == true)
		{
			setStorage('kullaniciAdi',kullaniciAdi);
			setStorage('sifre',sifre);
			setStorage('beniHatirla',"true");

		}else
		{
			setStorage('kullaniciAdi','');
			setStorage('sifre','');
			setStorage('beniHatirla','false')
		}

		Actions.drawerMenu({type:'reset'});
        this.setState({
        	spinnerState:(<View/>)
        });
	}

	render() {

	    return (
			<Container style={{backgroundColor:'#075f99'}}>
				<Grid>
					<Row size={1}></Row>
						<Row size={1.5}>
							<Body >
								<View style={styles.logoContainer}>
								<Image
								 style={styles.logo}
									 source={{uri: 'http://www.atilimyazilim.com/Bakim/11156/Logo/Logo.jpeg'}}
								 />
								</View>
							</Body>
						</Row>
						<Row size={4}>
				<Col size ={0.3}></Col>
				<Col size={2}>
					<Form>
						<Item>
							 <Icon active name='person'style={styles.colorWhite} />
								<Input value={this.state.kullaniciAdi} onChangeText={(value) => this.setState({kullaniciAdi: value})} placeholder="Kullanıcı Adı" placeholderTextColor="#95a5a6" style={styles.colorWhite}/>
						</Item>
						<Item>
						 	<Icon active name='key' style={styles.colorWhite}/>
							<Input secureTextEntry={this.state.secure} onChangeText={(value) => this.setState({sifre: value})} value={this.state.sifre}  placeholder="Şifre" placeholderTextColor="#95a5a6" style={styles.colorWhite}/>
							<Icon active name={this.state.secure? 'eye':'eye-off'} style={{color:"white"}} onPress={() => this.setState({ secure: !this.state.secure })}/>
						</Item>
						<ListItem last>
							<CheckBox onPress={() => this.setState({ beniHatirla: !this.state.beniHatirla })} checked={this.state.beniHatirla} />
							<Body>
								<Text  onPress={() => this.setState({ beniHatirla: !this.state.beniHatirla })} style={styles.colorWhite}>Beni Hatırla</Text>
							</Body>
						</ListItem>
						<Button onPress={this.goLogin.bind(this)} primary full  style={{marginTop:10}}>
							<Left><Icon active name="log-in" style={[styles.colorWhite,{paddingLeft:20}]}/></Left>
							<Body><Text style={styles.colorWhite}> Giriş Yap </Text></Body>
							<Right></Right>
						</Button>
						{this.state.spinnerState}
					</Form>
				</Col>
				<Col size={0.3}></Col>
						</Row>
				 </Grid>
  			</Container>

	    );
  	}
}
var width = Dimensions.get('window').width*0.3;
var styles = StyleSheet.create({
    logo: {
        height:width*0.66,
        width:width,

    },
    logoContainer:{
        backgroundColor:'#ecf0f1',
        padding:5,
        borderRadius:5,
    },
    logoText:{
    	fontSize:55,
    	color:'#ecf0f1',
    	fontFamily: 'Roboto-Thin',
    	marginTop:5,
    },
    colorWhite:{
    	color:'#fff',
    }
});




const mapStateToProps = ({ IslemResponse }) => {
  return {
    //sidemenu:IslemResponse.sidemenu,
    ignele:IslemResponse.ignele,
   };
};

const mapDispatchToProps = {
   //sideChanged,
   ignelemeChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
