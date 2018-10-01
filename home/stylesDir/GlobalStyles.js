import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  container_out: {
      flex: 1,
//      backgroundColor: '#DCDCDC',
          backgroundColor: '#ecf0f1',
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
          },

           topMenu: {
              height: 53,
              backgroundColor: '#64b5f6',
            },





});
