/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Platform, StyleSheet,
        Text, View,
        Image, Button,
        ProgressBarAndroid
} from 'react-native';


import React, { Component } from 'react';
import { NativeModules, requireNativeComponent, ViewPropTypes, DeviceEventEmitter} from 'react-native';

import ProgressBarView from './ProgressBar';
//module.exports = requireNativeComponent('MaterialCalendarView', iface);


const ToastExample    =   NativeModules.ToastExample;



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//const onSessionConnect = (event) => {
//
//    this.setState( prevState => {  progressVal : 100} )
// };

//type Props = {};
//var myBool = false;
 export default
 class SplashScreen extends Component {

    componentDidMount(){
       this.listener =  DeviceEventEmitter.addListener('onSessionConnect', this.handleEvent);
    }



     handleEvent(event) {
        ToastExample.show(event.sessionId , ToastExample.SHORT);
        this.setState(prevState => ({ progressVal: 100 }));
      }

//    componentWillUnmount() {
//        DeviceEventEmitter.removeListener(this.listener);
//      }



    state = {
        TextHolder:'This is Old Sample Text',
        isTextVary: false,
    };

//    props = undefined;

//    list = [1,2,3,4]

    constructor(props){
        super(props);
            this.props = props;
            this.state = {
                progressVal: 50,
            }

            this.handleEvent = this.handleEvent.bind(this);

//            this._onChange = this._onChange.bind(this);

//        console.log(""+ProgressBarView);
    }




//
//  _onChange(event) {
//  		if(!this.props.onDateChange) {
//  			return;
//  		}
//  		this.props.onDateChange(event.nativeEvent);
//  	}


    onPressLearnMore = () => {
//        this.setState({
//            TextHolder: (this.state.isTextVary)?"This is Old Sample Text":"Venky",
//            isTextVary:!this.state.isTextVary
//        });


//        alert(this.props.navigation);
        this.props.navigation.navigate('Login', {token:'token_val'});
    }

//            <ProgressBarAndroid styleAttr="Horizontal" color='#2196F3' style= {styles.progress_style} />


  render() {

//   var iface = {
//              name: 'MaterialCalendarView',
//              PropTypes: {
//                      day: PropTypes.number,
//                      month: PropTypes.number,
//                      year: PropTypes.number,
//                      View.propTypes, // include the default view properties
//
//              }
//          }



    let uri = {uri: 'http://www.pngonly.com/wp-content/uploads/2017/06/Nature-PNG-Clipart-Image-02.png'};



//    return <MaterialCalendarView {...this.props} onChange={this._onChange} />;

    return (
      <View style = {styles.container}>

            <Image source={uri} style={styles.image_styles} />
             <Text style={styles.welcome}> {this.state.TextHolder} </Text>
                        <Text style={styles.instructions}> To get started, edit App.js </Text>
                        <Text style={styles.instructions}> {instructions} </Text>


              <Button  onPress = {this.onPressLearnMore} title="Next Screen"
                        style={styles.button_style} accessibilityLabel="Learn more about this purple button"/>

            <ProgressBarView
                  progress = {this.state.progressVal}
                  style={styles.image_styles}
                  />

      </View>
    );

  }
}

//                  indeterminate ={true}


//                        <RCTMyCustomView {...this.props} onChange={this._onChange} />



//var ProgressBarView = requireNativeComponent(`ProgressBarView`, ProgressBarView, {
//  nativeOnly: {onChange: true}
//});
//
//SplashScreen.propTypes = {
//  /**
//   * Callback that is called continuously when the user is dragging the map.
//   */
//  onChangeMessage: PropTypes.func,
//  ...
//};


//var RCTMyCustomView = requireNativeComponent(`RCTMyCustomView`, SplashScreen, {
//  nativeOnly: {onChange: true}
//});


//                      style={styles.progressBar}







//
//MaterialCalendarComponent.propTypes = {
//	day: PropTypes.number,
//	month: PropTypes.number,
//	year: PropTypes.number,
//	onDateChange: PropTypes.func,
//	...View.propTypes,
//}
//
//
//const MaterialCalendarView = requireNativeComponent(`MaterialCalendarView`, MaterialCalendarComponent, {
//	nativeOnly: {
//		onChange: true,
//	},
//});
//
//export default MaterialCalendarComponent;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image_styles:{
    width: 150,
    height: 50
  },
  button_style:{
      margin: 50,
      color:'#841584'
  },

  progress_style:{
      width: 300,
      color: 'black'
  },

});
