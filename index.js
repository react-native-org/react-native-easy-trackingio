import { NativeModules } from 'react-native';

const NativeTrackingIO = NativeModules.EasyTrackingIO;

const EasyTrackingIO = {
  getAppId() {
    return NativeTrackingIO.getAppId();
  },
  getDeviceId() {
    return NativeTrackingIO.getDeviceId();
  },
  getChannelId() {
    return NativeTrackingIO.getChannelId();
  },
  init(appKey, channelId = '__default__') {
    NativeTrackingIO.init(appKey, channelId);
  }
};

module.exports = EasyTrackingIO;
