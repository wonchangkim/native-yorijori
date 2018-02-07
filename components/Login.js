import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithFeedBack, StatusVar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidngView} from 'react-native';

export default class Login extends Component {
  render() {
    return(
      <View style={style.container}>
         <View style={style.logoContainer}>
          <Image style={style.logo} source={require('../src/images/logoxl.png')}>
          <Text style={style.title}>account Information</Text>
          </Image>
         </View>
      </View>    
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32,53,70)',
    flexDirection: 'column',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title:{
    color: '#f7c744',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    backgroundColor: 'red',
  }
})