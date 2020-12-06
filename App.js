import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from './src/compornents/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
          <Appbar />
          {/*<MemoDetailScreen />*/}
          {/*<MemoListScreen />*/}
          {/*<MemoEditScreen />*/}
          {/*<LoginScreen />*/}
          <SignupScreen />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:78,
  }
});
