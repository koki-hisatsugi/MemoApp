import React from 'react';
import {StyleSheet, View} from 'react-native';

import MemoList from '../compornents/MemoList';
import Appbar from '../compornents/Appbar';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <MemoList />
        <CircleButton>
          {"\uf067"}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
  }
});

export default MemoListScreen;
