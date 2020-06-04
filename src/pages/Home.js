import React, {Component} from 'react';
import {Platform, StyleSheet, View,StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonOval from '../components/ButtonOval';
import {Text,List,ListItem,Container,Header,Content, Right, Icon, Body} from 'native-base';
import {ignelemeChanged} from '../actions';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';


 class Home extends Component {


  onPress(page)
  {
    Actions.push(page);
  }


  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={()=>this.onPress("Kelime")}>
              <Body>
              <Text>Kelimeler</Text>
              </Body>
              <Right><Icon name="arrow-forward"/></Right>
            </ListItem>
            <ListItem onPress={()=>this.onPress("Test")}>
            <Body>
              <Text>Testler</Text>
              </Body>
              <Right><Icon name="arrow-forward"/></Right>
            </ListItem>
            <ListItem onPress={()=>this.onPress("Istatistik")}>
            <Body>
              <Text>İstatistikler</Text>
              </Body>
              <Right><Icon name="arrow-forward"/></Right>
            </ListItem>
            <ListItem onPress={()=>this.onPress("Durum")}>
            <Body>
              <Text>Durum Tablosu</Text>
              </Body>
              <Right><Icon name="arrow-forward"/></Right>
            </ListItem>
          </List>
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