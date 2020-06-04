import React, {Component} from 'react';
import {Platform, StyleSheet, View,StatusBar,FlatList,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonOval from '../components/ButtonOval';
import {Text,List,ListItem,Container,Header,Content, Right, Icon, Body} from 'native-base';
import {ignelemeChanged, postRequest} from '../actions';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';

  

 class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      TestData:[],
    };
  }
  onPress(testId)
  {
    Alert.alert(
      'Teste başlamak istiyormusunuz?',
      '',
      [
        {text: 'Cancel',},
        {text: 'OK', onPress: () => this.testBasla(testId)},
      ],
      {cancelable: false},
    );
  }

  testBasla(testId)
  {
     Actions.push("Soru",{testId:testId});
  }

  async componentDidMount()
  {
    const testler = await postRequest([],"testler.php");
    this.setState({
      TestData:testler,
    });
  }
  


  render() {
    return (
      <Container>
        <Content>
        <FlatList
          data={this.state.TestData}
          renderItem={({item,index}) => {
            return(
              <ListItem onPress={()=>this.onPress(item.test_id)}>
                <Body>
                <Text>{item.test_adi}</Text>
                </Body>
                <Right><Icon name="arrow-forward"/></Right>
              </ListItem>
            )
          }}
        />
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  
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