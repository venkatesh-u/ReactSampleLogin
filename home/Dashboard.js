/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {Platform, StyleSheet,
        Text, View, Header,
        Image, Button, ActionBar,
        ProgressBarAndroid, ToolbarAndroid, ActionBarImage, StatusBar,
        FlatList, ActivityIndicator, ToastAndroid, NativeModules, AsyncStorage, BackHandler
} from 'react-native';

const ToastExample = NativeModules.ToastExample;
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';
import { HeaderBackButton } from 'react-navigation';


//import { requireNativeComponent } from 'react-native';
//module.exports = requireNativeComponent('MaterialCalendarView', iface);



export default class Dashboard extends Component{

    constructor(props){
       super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
//        this.logout = this.logout.bind(this);

//       const{state} = props.navigation;
//        if(state != undefined){

//       this.state = {
//                   email : state.params.object.user.email,
//       //            img_url : state.params.object.user.avatar.profile_thumb_url,
//                   auth_token : state.params.object.authentication_token,
//                   isLoading : true
//              }
//        }
                  this.state = {
                       email : '',
                       auth_token : '',
                       isLoading : true,
                       showAlert: false,
//                       is_logged_in:true;
                      }
//                }




//       ToastExample.show('Awesome', ToastExample.SHORT);
//       ToastExample.sendEvent();

       this.getData();

//       console.log(JSON.stringify(state.params.object));
    }


    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
             BackHandler.exitApp();
        return false;
    }

     _showAlert = () => {
        this.setState({
          showAlert: true
        });
      };

      _hideAlert = () => {
        this.setState({
          showAlert: false
        });
      };


    getData(){

         AsyncStorage.getItem("LoginObject").then((value) => {
         var j = JSON.parse(value);
//         alert(j.success);
                   if( j.success ){
                       this.setState({
                             auth_token: j.authentication_token,
                             email: j.user.email,

                       })
                        this.props.navigation.navigate("Dashboard", null);
                   }
               }).done();
    }




    static navigationOptions={
        headerTitle: 'Dashboard',
        headerStyle: {
            backgroundColor: 'powderblue',
          },
        headerTitleStyle: {
            textAlign:'center',
            flex:1,
//            alignItems:'center',
//            justifyContent:'center',
          },
        headerTintColor: 'black',
        actions:true,
//        headerRight: <Text style={{ text_color:'red', color:'black', marginRight:18, fontWeight:'bold', fontSize:22}}
//         onPress={() => this.logout()} >Logout</Text>
        headerLeft: <HeaderBackButton onPress={() => BackHandler.exitApp() } />


//        navigatorButtons: {
//              rightButtons: [
//                {
//                  id: 'custom-button',
//                  component: 'CustomButton', // This line loads our component as a nav bar button item
//                  passProps: {
//                    text: 'Hi!',
//                  },
//                },
//              ],
//            },
    };

//     <ToolbarAndroid
//                      actions={[{title: 'Settings', icon: require('./ic_launcher.png'), show: 'always'}]}
//                      onActionSelected={this.onActionSelected}/>

// <Header
//      leftComponent={{ icon: 'menu', color: '#fff' }}
//      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//      rightComponent={{ icon: 'home', color: '#fff' }}
//    />



componentDidMount(){

        this._showAlert();
       fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
              isLoading: false,
              dataSource: responseJson.movies,
            },
            function(){
                console.log(JSON.stringify(responseJson));
            },



        );

        this._hideAlert();

      })
      .catch((error) =>{
        console.error(error);
      });

  }


    render(){
            let uri = {uri: 'http://www.pngonly.com/wp-content/uploads/2017/06/Nature-PNG-Clipart-Image-02.png'};
            var img_uri= {uri: this.state.img_url};

//            if(this.state.isLoading){
//              return(
//                <View style={{flex: 1, padding: 20}}>
//                  <ProgressBarAndroid />
//                </View>
//              )
//            }

            return(
              <View style={{flex: 1, paddingTop:20}}>
                      <StatusBar barStyle = "dark-content" backgroundColor='skyblue'  hidden = {false}/>

                <FlatList
                  data={this.state.dataSource}
                  renderItem={({item}) => <Text style={styles.text_color}>{item.title}, {item.releaseYear}</Text>}
                  keyExtractor={({id}, index) => id}
                />

                <Button title='Go to Maps' onPress={()=> this.props.navigation.navigate('Maps')}/>
                <Button title='Logout' onPress={()=> this.logout()}/>
                <AwesomeAlert
                          show={this.state.showAlert}
                          showProgress={true}
                          closeOnTouchOutside={false}
                          closeOnHardwareBackPress={false}

                        />

              </View>
            );
          }


    logout = () => {

        alert(this.state.auth_token);

          this._showAlert();
          axios.post('https://qa-api.eteki.com/users/sign_out', null,
          {
                  headers: {
                      'authentication_token': this.state.auth_token,
                      'device_type': "ANDROID",
                      'device_id': "android_id"

                  }
          })
          .then(
                (res)=>{

                    this._hideAlert();
                    if(res.data.success){

                        var json = res.data;
                        this.props.navigation.navigate('Login', null ) ;
                                AsyncStorage.setItem("isLoggedIn", JSON.stringify(false) );
                                AsyncStorage.clear();
                                alert("Logout successful");
//                                BackHandler.exitApp();
                    }
                    else{
                        alert(JSON.stringify(res) );
                              this.props.navigation.navigate('Login', null ) ;

                    }
                }
          )
          .catch(
                (error)=>{
                    alert(error);
                }
          );

    }

}


const styles = StyleSheet.create({
    text_color:{
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent:'center',
        padding: 10,
        flex: 1,
        textAlign: 'center'
    },

    image_background:{
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: 'black',
    },

    container_main:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        alignItems: 'stretch',

    },

    container_up: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: 'grey',
      padding: 20,


    },
    container_down: {
      flex: 3,
      backgroundColor: '#FFFFFF',
    },

    component_center:{
        alignItems: 'center',
        justifyContent: 'center',
    }



});