import * as React from 'react';
// import React from 'react';
// import { Font } from 'expo';
import {
  StyleSheet, View, Text, TouchableHighlight
} from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf'

const glyphMap = { pencil: '\uf303', plus: '\uf067' };
const CustomIcon = createIconSet(glyphMap, 'FontAwsome', fontAwsome);


class CircleButton extends React.Component {
  state={
    fontLoaded:false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome:fontAwsome,
    });

    this.setState({ fontLoaded:true });
  }

  render() {
    const {
      name, style, color, onPress,
    } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <TouchableHighlight style={[styles.container,style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor:bgColor }]}>
          {
          this.state.fontLoaded ? (
            <Text style={[styles.circleButtonTitle, { color:textColor }]}>
              {this.props.children}
            </Text>
          ) : null
        }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: 48, // 追加
    height: 48, // 追加
    position:'absolute',
    bottom:32,
    right:32,
  },
  circleButton:{

    width:48,
    height:48,
    borderRadius:24,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset:{ width: 0,height: 2 },
    shadowOpacity:0.5,
    shadowRadius:3,
    elevation: 3,
  },
  circleButtonTitle:{
    fontFamily:'FontAwsome',
    fontSize:24,
    // lineHeight:24,
    color:'#fff',
  }
});
export default CircleButton;
