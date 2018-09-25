import { createStackNavigator } from 'react-navigation'
import SplashScreen from './home/SplashScreen'
import Login from './home/Login'
import Dashboard from './home/Dashboard'
//import CalendarExample from './home/CalendarExample'

//import {NativeModules} from 'react-native';
//module.exports = NativeModules.ToastExample;
//  CalendarExample:{screen: CalendarExample},


const App = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
  Login:{screen: Login},
  Dashboard:{screen: Dashboard},

});

export default App;