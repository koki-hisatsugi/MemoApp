import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';
import LoginScreen from '../screens/LoginScreen';

class Appbar extends React.Component {
  handlePress() {
    this.props.navigation.navigate('LoginScreen');
  }

  render() {
    return (
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMT</Text>
          <CircleButton onPress={this.handlePress.bind(this)}>
            ログイン画面
          </CircleButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    height:78,
    paddingTop:30,
    backgroundColor:'#265366',
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset:{ width: 0, height: 0 },
    shadowOpacity:0.5,
    shadowRadius:3,
    elevation: 5,
    zIndex:10,
  },
  appbarTitle:{
    color:'#fff',
    fontSize:18,
  },
});
export default Appbar;
