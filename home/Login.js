/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,
        Text, View, Alert,
        Image, Button, ProgressBarAndroid,
        TextInput, TouchableHighlight, AsyncStorage,
        } from 'react-native';


import axios from 'axios';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};

//var myBool = false;




export default class Login extends Component {

    constructor(props){
        super(props)

//        const {state} = props.navigation;
//        Alert.alert(state.params.token);

        this.state = {
              email   : 'sr3@mailinator.com',
              password: '12345678',
              error: null,
              emailErrorMsg: '',
              passwordErrorMsg: '',
              progressbarStatus: false
            }
    }

  static navigationOptions = {
        title: 'Login',
  };

  //Validate email and password
  isValid() {

      const { email, password } = this.state;
      let valid = false;

      if (email.length > 0 && password.length > 0) {
        valid = true;
      }

      if (email.length === 0) {
        this.setState({ error: 'You must enter an email address' });
      } else if (password.length === 0) {
        this.setState({ error: 'You must enter a password' });
      }

      return valid;
    }

    //Validate email with regex patterns
    validateEmail(email) {
         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(re.test(String(email).toLowerCase())){
                return true;
         }else{
            this.setState({error:'invalid email'})
         }

         return false
    }

    //Validate password length
    validatePassword(password){
        if(password.length != 8){
            this.setState({error:"Password length must be 8 chars"})
            return false;
        }
       return true;
    }

    //update progressbar status
    loadProgressbar(){
         if(this.state.progressbarStatus)
            this.setState({progressbarStatus: false})
          else
            this.setState({progressbarStatus: true})
    }


  onClickListener = (viewId) => {
            switch(viewId){

                case 'login':
                    const { email, password, error } = this.state;
                    if (this.isValid()) {

                        if(this.validateEmail(email) && this.validatePassword(password)){
                            this.loadProgressbar();

                            this.setState({error:''});


                                  axios.post('http://172.16.19.113:3001/users/sign_in', {email:email, password:password},
                                     {
                                                       headers: {
                                                           'device_type': "ANDROID",
                                                           'device_id': "android_id"
                                                       }
                                  })
                                  .then(
                                        (res)=>{
                                            this.loadProgressbar();

                                            if(res.data.success){

                                                var json = res.data;
//                                                alert(JSON.stringify(json));
                                                AsyncStorage.setItem("isLoggedIn", JSON.stringify(true) );
                                                AsyncStorage.setItem("LoginObject", JSON.stringify(json));

//                                                this.props.navigation.navigate('Dashboard', {object:  json } ) ;
                                                this.props.navigation.navigate('Dashboard', null) ;

                                            }
                                            else{
                                                alert( res.data.message[0] );
                                            }

                                        }
                                  )
                                  .catch(
                                        (error)=>{
                                             this.loadProgressbar();
                                            alert(error);
                                        }
                                  );

                        }
                    }
                break;
//                case 'restore_password':
//                          Alert.alert("Alert", "restore_password Button pressed "+viewId);
//                break;
//
//                case 'register':
//                          Alert.alert("Alert", "register Button pressed "+viewId);
//                break;

            }

    }

    clearError = (viewId, values) =>{
        switch(viewId){

        case 'email_error':
            if(values.length > 0){
                        this.setState({error:''})
                }else{
                    this.setState({ error: 'You must enter an email address' });
                }
        break;
        case 'pwd_error':
            if(values.length > 0){
                        this.setState({error:''})
                    }else{
                        this.setState({ error: 'You must enter a password' });
                    }
        break;
        }
    }

  render() {
    return (
      <View style={styles.container_out}>


      {
        this.state.progressbarStatus? <ProgressBarAndroid styleAttr="Horizontal" color='#2196F3' style= {styles.progress_style} /> : null
      }


      <View style={styles.container_in}>


      <Text style={styles.error_text}>{this.state.error}</Text>


         <View style={styles.inputContainer}>

                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={ (email) => {
                                this.setState({email});
                                /*this.clearError('email_error', email)*/
                            }
                        }/>
         </View>

         <Text style={styles.error_text}>{this.state.emailErrorMsg}</Text>


         <View style={styles.inputContainer}>
                   <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                   <TextInput style={styles.inputs}
                       placeholder="Password"
                       secureTextEntry={true}
                       underlineColorAndroid='transparent'
                       onChangeText={ (password) => {
                               this.setState({password});
                               /*this.clearError('pwd_error', password)*/
                           }
                       }/>
         </View>


         <Text style={styles.error_text}>{this.state.passwordErrorMsg}</Text>






          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                   <Text style={styles.loginText}>Login</Text></TouchableHighlight>

          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                      <Text>Forgot your password?</Text></TouchableHighlight>

          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
              <Text>Register</Text></TouchableHighlight>







    </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container_out: {
      flex: 1,
      backgroundColor: '#DCDCDC',
    },

    container_in: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DCDCDC',
        },



    error_text:{
        color:'red',
        textAlign:'justify',
        marginBottom:20,
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#212121',
    marginBottom: 5,
  },
  image_styles:{
    width: 50,
    height: 50
  },
  text_input_style:{
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    color:'skyblue',
    borderBottomColor:'red',

  },

  inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:350,
        height:45,
        marginBottom:5,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
     inputs:{
          height:45,
          marginLeft:16,
          borderBottomColor: '#FFFFFF',
          flex:1,
      },

      buttonContainer: {
          height:45,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:20,
          width:300,
          borderRadius:30,
        },

          loginButton: {
            backgroundColor: "#00b5ec",
          },

          loginText: {
            color: 'white',
          },

          progress_style:{
            width: 450,
          }





});
