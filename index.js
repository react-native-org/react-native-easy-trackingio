import { NativeModules } from 'react-native';

const NativeTrackingIO = NativeModules.EasyTrackingIO;

const EasyTrackingIO = {
  get appId(){
    return NativeTrackingIO.getAppId();
  }
};

module.exports = EasyTrackingIO;
