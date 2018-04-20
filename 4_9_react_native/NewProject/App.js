/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

// 大文字の F と 小文字の f が
// 混在しているので注意してください。
// import は、dateFormat
// from は、dateformat
import dateFormat from 'dateformat';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    console.log("DebugMessage");
    console.log({date:new Date()});
  }
  render() {
    const today = new Date();
    const todayString = dateFormat(today, "yyyy年m月dd日");

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         こんにちは {todayString}
         {'\n' /* {'\n'} で囲むことで Text タグ内で改行できます。*/}
         {new Date().getFullYear()}年
         {new Date().getMonth() + 1}月
         {new Date().getDate()}日
        </Text>
        /* 異なる Text タグを作成しても改行されます。*/
        <Text style={styles.welcome}>
         {dateFormat(new Date(), "yyyy年m月dd日")}
        </Text>

        <Image style={{width:100, height:100}}
               source={require('./rnchat.png')}
        />
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    color: '#FF0000'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
