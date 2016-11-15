/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
  NativeModules
} from 'react-native';

export default class rnintro extends Component {

  showToast() {
    ToastAndroid.show('Toast from React Native', ToastAndroid.SHORT)
  }

  navigate() {
    NativeModules.Navigator.navigate()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={this.showToast}
          title={'Show Toast'}
          />
        <Button
          onPress={this.navigate}
          title={'Navigate'}
          />
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 10
  },
  button: {
    margin: 10
  }
});

AppRegistry.registerComponent('rnintro', () => rnintro);
