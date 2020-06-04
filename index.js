import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { View } from 'react-native';
import App from './src';
import {name as appName} from './app.json';

class Index extends Component {
   
  render() {
    return (
        <View style={{flex:1}}>
            <App/>
        </View>
    );
  }
}

export default Index;


AppRegistry.registerComponent(appName, () => Index);
