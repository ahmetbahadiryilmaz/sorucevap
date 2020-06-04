import React, { Component } from 'react';
import { Text,TouchableOpacity } from 'react-native';

class UcNokta extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <TouchableOpacity style={[{backgroundColor: '#27ae60',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,borderRadius:10,width:80,height:40},this.props.style]}>
        <Text style={{fontSize:33,color:'white',textAlign:'center',justifyContent: 'center',}}>•••</Text>
        </TouchableOpacity>
    );
  }
}

export default UcNokta;
