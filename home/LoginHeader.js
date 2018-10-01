import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './stylesDir/GlobalStyles';



class LoginHeader extends Component{

    render(){
        return(
            <View>
                  <Header
                    outerContainerStyles={styles.topMenu}

                    centerComponent={{
                      text: 'Login',
                      style: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
                    }}

                    rightComponent={

                        <View style={{ flexDirection:'row',  flex:1}}>
                              <Icon
                                  name="search"
                                  color='#fff'
                                  onPress={() => alert('search Pressed')}
                                  underlayColor={'#64b5f6'}
                                  size={20}
                                  style={{marginRight:15}}
                                />

                                <Icon
                                    name="bell"
                                    color='#fff'
                                    onPress={() => alert('Bell Pressed')}
                                    underlayColor={'#64b5f6'}
                                    size={20}
                                    style={{marginRight:5}}
                                  />
                        </View>
                    }

                    leftComponent={
                      <Icon
                        name="bell"
                        color='#fff'
                        onPress={() => console.log('pressed')}
                        underlayColor={'#64b5f6'}
                        size={20}
                      />
                    }
                  />
              </View>
        );
    }

}


export default LoginHeader;