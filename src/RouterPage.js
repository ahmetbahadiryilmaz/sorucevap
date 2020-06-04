import React, {Component} from 'react';

/*Components*/
import SideMenu from './components/SideMenu';
import {Router, Scene, Drawer,Stack} from 'react-native-router-flux';
import {Dimensions} from 'react-native';

/*Pages*/
import Login from './pages/Login';
import Home from './pages/Home';
import Kelime from './pages/Kelime';
import Durum from './pages/Durum';
import Istatistik from './pages/Istatistik';
import Test from './pages/Test';
import Soru from './pages/Soru';

 class RouterPage extends Component{

  render() {
	var drawerWidth = Dimensions.get('window').width*0.7
    return (
        <Router>
          <Scene key="root">
			  {/* <Scene key="Login" initial type="reset" component={Login} hideNavBar={true} /> */}
				<Drawer
				hideNavBar
				key="drawerMenu"
				initial
				contentComponent={SideMenu}
				drawerWidth={drawerWidth}
				drawerPosition="left">
					<Stack>
					<Scene key="Home" initial type="reset" component={Home} title="Anasayfa" />
					<Scene key="Kelime"  type="reset" component={Kelime} title="Kelimeler" />
					<Scene key="Durum"  type="reset" component={Durum} title="Durumlar" />
					<Scene key="Istatistik"  type="reset" component={Istatistik} title="İstatistikler" />
					<Scene key="Test"  type="reset" component={Test} title="Testler" />
					<Scene key="Soru"  type="reset" component={Soru} title="Sorular" />
			    	</Stack>
				</Drawer>
         </Scene>
       </Router>
    );
  }
}
export default RouterPage;
