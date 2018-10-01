import React, {Component} from 'react';
import {Text, View, StyleSheet, PermissionsAndroid} from 'react-native';
import MapView from 'react-native-maps';

export default class Maps extends Component{



render(){


    return(
        <MapView  style={styles.container}
           region={{
                latitude: 59.32,
                longitude: 18.06,
                latitudeDelta: 0.1,
                longitudeDelta:0.1
           }}
        >

          <MapView.Marker
                        coordinate={{
                        latitude: 59.32,
                        longitude: 18.06
                        }}

                        title={'Title'}
                        description={'Description'}
                    />


        </MapView>


    );
}


 componentDidMount (){
    this.askForUserPermissions();

  }

  async askForUserPermissions() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Wifi networks',
          'message': 'We need your permission in order to find wifi networks'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Thank you for your permission! :)");
//         this.getWifiNetworksOnPress();
//         this.connectionStatusOnPress();

      } else {
        console.log("You will not able to retrieve wifi available networks list");
      }
    } catch (err) {
      console.warn(err)
    }
  }






}


const styles = StyleSheet.create({

    container:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        justifyContent:'flex-end',
        alignItems:'center',
    },

    map:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    },



})