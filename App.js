import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Appbar from './src/compornents/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import firebase from 'firebase';
import ENV from './env.json';

require("firebase/firestore");

const Config = {
apiKey: ENV.FIREBASE_API_KEY,
authDomain: ENV.FIREBASE_AUTH_DOMAIN,
projectId: ENV.FIREBASE_PRJ_ID,
storageBucket: ENV.FIREBASE_STRAGE,
messagingSenderId: ENV.FIREBASE_SENDER_ID,
appId: ENV.FIREBASE_APP_ID,
measurementId: ENV.FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(Config);
// firebase.analytics();

const App = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
  MemoCreate: { screen: MemoCreateScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Memoooot',
    headerStyle:{
      backgroundColor: '#265366',
    },
    headerTintColor:'#fff',
    headerBackTitleStyle:null,
    headerTitleStyle:{
      color: '#fff',
      alignItems: 'center',
    },
    headerTitleAlign: 'center',
    // ... オプション
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:78,
  }
});

export default createAppContainer(App);
