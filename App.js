import { createStackNavigator } from 'react-navigation'
import SplashScreen from './home/SplashScreen'
import Login from './home/Login'
import Dashboard from './home/Dashboard';
import Maps from './home/Maps';
//import CalendarExample from './home/CalendarExample'

//import {NativeModules} from 'react-native';
//module.exports = NativeModules.ToastExample;
//  CalendarExample:{screen: CalendarExample},


const App = createStackNavigator({
  SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
           header: null
          }
  },
  Login:{
        screen: Login,
        navigationOptions:{
            header:null,
        }
  },
  Dashboard:{screen: Dashboard},
  Maps:{screen: Maps,
        navigationOptions:{
            header:null,
        }
  },

});

export default App;