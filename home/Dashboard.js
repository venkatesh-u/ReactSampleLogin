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
        ProgressBarAndroid, ToolbarAndroid,
        FlatList, ActivityIndicator, ToastAndroid, NativeModules
} from 'react-native';

const ToastExample = NativeModules.ToastExample;

//import { requireNativeComponent } from 'react-native';
//module.exports = requireNativeComponent('MaterialCalendarView', iface);



export default class Dashboard extends Component{

    constructor(props){
       super(props)
       const{state} = props.navigation;
//
       this.state = {
            email : state.params.object.user.email,
            img_url : state.params.object.user.avatar.profile_thumb_url,
            auth_token : state.params.object.authentication_token,
            isLoading : true
       }

//       alert(ToastExample);

       ToastExample.show('Awesome', ToastExample.SHORT);

       ToastExample.sendEvent();

//       console.log(JSON.stringify(state.params.object));
    }






    static navigationOptions={
        title: 'Dashboard',
        headerStyle: {
            backgroundColor: 'powderblue'
          },
        headerTitleStyle: {
            alignSelf: 'center'
          },
        headerTintColor: 'black',
        actions:true,

        navigatorButtons: {
              rightButtons: [
                {
                  id: 'custom-button',
                  component: 'CustomButton', // This line loads our component as a nav bar button item
                  passProps: {
                    text: 'Hi!',
                  },
                },
              ],
            },
    };

//     <ToolbarAndroid
//                      actions={[{title: 'Settings', icon: require('./ic_launcher.png'), show: 'always'}]}
//                      onActionSelected={this.onActionSelected}/>
//


// <Header
//      leftComponent={{ icon: 'menu', color: '#fff' }}
//      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//      rightComponent={{ icon: 'home', color: '#fff' }}
//    />



componentDidMount(){

    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
              isLoading: false,
              dataSource: responseJson.movies,
            },

            function(){
                console.log(JSON.stringify(responseJson));
            }
        );

      })
      .catch((error) =>{
        console.error(error);
      });


  }


    render(){
            let uri = {uri: 'http://www.pngonly.com/wp-content/uploads/2017/06/Nature-PNG-Clipart-Image-02.png'};
            var img_uri= {uri: this.state.img_url};

//        return(
////                <View style={styles.container_up}>
//
//                      <View style={styles.container_up}>
//                         <Image source={img_uri} style={styles.image_background}/>
//                         <Text style={styles.text_color}>{this.state.email}</Text>
//                      </View>

//                 </View>


//              );


        if(this.state.isLoading){
              return(
                <View style={{flex: 1, padding: 20}}>
                  <ProgressBarAndroid />
                </View>
              )
            }

            return(
              <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                  data={this.state.dataSource}
                  renderItem={({item}) => <Text style={styles.text_color}>{item.title}, {item.releaseYear}</Text>}
                  keyExtractor={({id}, index) => id}
                />
              </View>
            );
          }


//              return(
//                    <View style={styles.container_main}>
//
//
//                                         <View style={styles.container_down}>
//                                              <FlatList
//                                                   data={this.state.dataSource}
//                                                   renderItem={ ({item}) => <Text style={styles.text_color}>{item.title}, {item.releaseYear}</Text> }
//                                                   keyExtractor={({id}, index) => id}
//
//                                              />
//                                         </View>
//
//                                    </View>
//
//              )

//        }


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