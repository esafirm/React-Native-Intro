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
  NativeModules,
  Navigator,
  Dimensions
} from 'react-native';
import TestAsync from './src/TestAsync'

const width = Dimensions.get('window').width

export default class RnIntro extends Component {

  showToast() {
    ToastAndroid.show('Toast from React Native', ToastAndroid.SHORT)
  }

  navigate() {
    NativeModules.Navigator.navigate()
  }

  render() {

    const first = (
      <View style={styles.container} >
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={this.showToast}
          title={'Show Toast'}
          />

        <Button
          onPress={this.showToast}
          title={'Show Toast'}
          />

        <Button
          onPress={this.showToast}
          title={'Show Toast'}
          />

        <Button
          onPress={this.showToast}
          title={'Show Toast'}
          />

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
      </View >
    )

    const routes = [
      { title: 'Welcome Screen', index: 0, view: first },
      { title: 'Test Async Screen', index: 1, view: (<TestAsync />) }
    ]

    const button = (route, navigator) => {
      (
        <Button
          title={'Push'}
          onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1])
            } else {
              navigator.pop()
            }
          } }
          />
      )
    }

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            {route.view}
            <Button
              style={{
                width: 1000
              }}
              title={'Toggle Page'}
              onPress={() => {
                if (route.index === 0) {
                  navigator.push(routes[1])
                } else {
                  navigator.pop()
                }
              } }
              />
          </View>
        }
        />
    )
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

AppRegistry.registerComponent('rnintro', () => RnIntro);
