import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
  // 存在しない場合は空文字列を返すと安全です
  if (date == null) { return ''; }
  // firebaseのTimestamp型をDate型に変換する
  const dateObject = date.toDate();
  // Dateオブジェクトを文字列に変換する
  return dateObject.toISOString().split('T')[0];
};

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
    key:'',
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo, key: params.memo.key });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  deleteMemo() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key).delete()
      .then(() => {
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }

  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View style={styles.memoHeaderContent}>
              <Text style={styles.memoHeaderTitle}>{String(memo.body).substring(0, 10)}</Text>
              <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>

        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('MemoEdit', { ...memo, returnMemo: this.returnMemo.bind(this) }); }}
        >
          {'\uf303'}
        </CircleButton>
        <CircleButton
          color="white"
          style={styles.deleteButton}
          onPress={this.deleteMemo.bind(this)}
        >
          {'\uf2ed'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
  },
  memoHeader:{
    height:100,
    backgroundColor:'#17313C',
    justifyContent:'center',
    padding:10,
  },
  memoHeaderTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    marginBottom:4,
  },
  memoHeaderDate:{
    fontSize:12,
    color:'#fff',

  },
  memoContent:{
    paddingTop:30,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    backgroundColor:'#fff',
    flex:1,
  },
  memoBody: {
    lineHeight: 22,
    fontSize: 15,
  },
  editButton:{
    top:75,

  },
  deleteButton:{
    bottom:30,

  },
});

export default MemoDetailScreen;
