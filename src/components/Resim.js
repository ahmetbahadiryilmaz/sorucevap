import React, { Component } from 'react';
import { View, Image,Dimensions } from 'react-native';

class Resim extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {

  const {width,height} = Dimensions.get('window');
  const shapeWidth = width/1.4;
  const shapeHeight = shapeWidth/1.0274;
  const marginLeft = (width-shapeWidth)/2;
  const marginTop = this.props.marginTop;
  const capaWidth = shapeWidth/2;
  const capaHeight = capaWidth/0.879;
  const marginLeftCapa = (shapeWidth-capaWidth)/2;
  const marginTopCapa = (shapeHeight-capaHeight)/2;

    return (
        <View style={{width:shapeWidth,height:shapeHeight,marginTop:marginTop,marginLeft:marginLeft}}>
          <Image
            source={require('../images/shape.png')}
            style={{position: 'absolute',width:shapeWidth,height:shapeHeight}}
          />
          <Image
            source={require('../images/capa.png')}
            style={{position: 'absolute',width:capaWidth,height:capaHeight,marginTop:marginTopCapa,marginLeft: marginLeftCapa,}}
          />
        </View>
    );
  }
}

export default Resim;
