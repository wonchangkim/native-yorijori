import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import * as firebase from 'firebase';
import { Container }from './styles/grid';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';

var config = {
  apiKey: "AIzaSyC3WoKqZDRolSPei9Dd12YYAbZN5xn4unU",
  authDomain: "final-board.firebaseapp.com",
  databaseURL: "https://final-board.firebaseio.com",
  projectId: "final-board",
  storageBucket: "final-board.appspot.com",
  messagingSenderId: "762408960996"
};
firebase.initializeApp(config);



export default class App extends React.Component {
  render() {
    return(
      <View style={style.container}>
        <Text style={style.welcome}>
          welcome to React Native!
        </Text>
        <Text style={style.instructions}>
          to be started, edit App.js
        </Text>
        <Text style={style.instructions}>
        
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  }
});
