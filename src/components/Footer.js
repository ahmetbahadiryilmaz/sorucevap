import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            active:'apps',
        }
    }

    buttonPress(name)
    {
        this.setState({active:name});
    }
    buttonStyle=(name)=>{
      if(name==this.state.active) 
        return ({backgroundColor:renkler.beyaz,color:renkler.truncuKoyu})
      else 
        return ({backgroundColor:renkler.truncuKoyu,color:renkler.beyaz})
    }

  render() {
    return (
        <Footer>
          <FooterTab style={{backgroundColor: renkler.truncuKoyu,}}>
            <Button style={this.buttonStyle('apps')} onPress={()=>this.buttonPress('apps')}>
              <Icon name="apps" style={this.buttonStyle('apps')} />
              <Text style={this.buttonStyle('apps')} >Apps</Text>
            </Button>
            <Button style={this.buttonStyle('camera')} onPress={()=>this.buttonPress('camera')}>
              <Icon name="camera"  style={this.buttonStyle('camera')} />
              <Text style={this.buttonStyle('camera')} >Camera</Text>
            </Button>
            <Button style={this.buttonStyle('navigate')} onPress={()=>this.buttonPress('navigate')}>
              <Icon active name="navigate" style={this.buttonStyle('navigate')} />
              <Text style={this.buttonStyle('navigate')}>Navigate</Text>
            </Button>
            <Button style={this.buttonStyle('person')} onPress={()=>this.buttonPress('person')}>
              <Icon name="person" style={this.buttonStyle('person')}/>
              <Text style={this.buttonStyle('person')}>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

const renkler={
  truncuAcik:"#F9C158",
  truncuOrta:"#F87B2D",
  truncuKoyu:"#F87A2C",
  beyaz:'white',
}
