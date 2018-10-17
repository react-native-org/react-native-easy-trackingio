/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import EasyTrackingIO from 'react-native-easy-trackingio';

const DemoButton = props => {
  return <Button title={props.text} onPress={props.onClick} />;
};

export default class App extends Component {
  state = {
    appId: '',
    channelId: '',
    deviceId: '',
    isAppOnForeground: null
  };

  constructor(props) {
    super(props);
    EasyTrackingIO.initAndroid('289eb2775161a52be342a6abb0e67883');
  }

  componentDidMount() {
    this.loadTrackingIOParams();
  }

  componentWillUnmount() {
    EasyTrackingIO.dispose();
  }

  loadTrackingIOParams() {
    Promise.all([
      EasyTrackingIO.isAppOnForeground(),
      EasyTrackingIO.getAppId(),
      EasyTrackingIO.getChannelId(),
      EasyTrackingIO.getDeviceId()
    ]).then(results => {
      this.setState({
        appId: results[1],
        channelId: results[2],
        deviceId: results[3],
        isAppOnForeground: results[0]
      });
    });
  }

  doReportLogin() {
    EasyTrackingIO.reportUserLogin('login-user');
    console.warn('上报登录 done.');
  }

  doReportRegister() {
    EasyTrackingIO.reportUserRegister('register-user');
    console.warn('上报注册 done.');
  }

  doReportOrder() {
    EasyTrackingIO.reportOrder('order-no', 'CNY', 99.99);
    console.warn('上报下单 done.');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native! This is trackingio sdk demo.</Text>
        <Text style={styles.welcome}>AppID: {this.state.appId}</Text>
        <Text style={styles.welcome}>ChannelID: {this.state.channelId}</Text>
        <Text style={styles.welcome}>DeviceID: {this.state.deviceId}</Text>
        <DemoButton text="上报登录" onClick={this.doReportLogin} />
        <DemoButton text="上报注册" onClick={this.doReportRegister} />
        <DemoButton text="上报下单" onClick={this.doReportOrder} />
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
