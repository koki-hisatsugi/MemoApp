import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../compornents/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          memoList.push({ ...doc.data(), key: doc.id });
        });
        this.setState({ memoList }); // =this.setState({ memoList: memoList });と同等
      });
    /*
      .get()
      .then((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          memoList.push({ ...doc.data(), key: doc.id });
          console.log('doc', doc.data());
        });
        this.setState({ memoList }); // =this.setState({ memoList: memoList });と同等
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
      */
  }

  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  handlePressSignout() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf067'}
        </CircleButton>
        <CircleButton onPress={this.handlePressSignout.bind(this)} style={styles.button}>
          {'\uf2f5'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
  },
  button: {
    left:30,
  },
});

export default MemoListScreen;
