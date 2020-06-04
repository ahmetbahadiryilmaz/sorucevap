import React, {Component} from 'react';
import {Platform, StyleSheet, View,StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonOval from '../components/ButtonOval';
import {Text,List,ListItem,Container,Header,Content, Right, Icon, Body} from 'native-base';
import {ignelemeChanged} from '../actions';
import {connect} from 'react-redux';


 class Home extends Component {


  onPress(page)
  {

  }


  render() {
    return (
      <Container>
        <Content>
        
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