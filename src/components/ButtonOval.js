import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

class ButtonOval extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style ={[styles.button,this.props.active==true?styles.buttonActive:{}]}>
        <Text style={[styles.text,this.props.active==true?styles.textActive:{}]}> {this.props.value} </Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonOval;

const styles={
    button:{
        height:40,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignSelf: 'flex-start'
    },
    buttonActive:{
      backgroundColor:'green',
    },
    text:{
      textTransform: 'capitalize',
      color:'#333',
    },
    textActive:{
      color:'white',
    }
}
