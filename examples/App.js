/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import EasyTrackingIO from 'react-native-easy-trackingio';

export default class App extends Component {
  constructor(props){
    super(props);
    EasyTrackingIO.init('289eb2775161a52be342a6abb0e67883');
  }
  componentDidMount() {
    EasyTrackingIO.getChannelId().then(appId => {
      console.warn(appId);
      this.setState({ appId });
    });
  }
  state = {
    appId: ''
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! {this.state.appId}
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
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
