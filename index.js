import { NativeModules } from 'react-native';

const NativeTrackingIO = NativeModules.EasyTrackingIO;

class EasyTrackingIO {
  constructor() {
    if (!NativeTrackingIO) {
      console.warn(`NativeTrackingIO is invalid, please load sdk.`);
    }
  }

  /**
   * 获取AppID
   * @returns Promise<string>
   */
  getAppId() {
    return NativeTrackingIO.getAppId();
  }

  /**
   * 获取设备标识
   * @returns Promise<string>
   */
  getDeviceId() {
    return NativeTrackingIO.getDeviceId();
  }

  /**
   * 获取初始化的Channel ID
   * @returns Promise<string>
   */
  getChannelId() {
    return NativeTrackingIO.getChannelId();
  }

  /**
   * 返回App是否在前台
   * @returns Promise<boolean>
   */
  isAppOnForeground() {
    return NativeTrackingIO.isAppOnForeground();
  }

  /**
   * 初始化SDK
   * @param {string} appKey SDK的appKey
   * @param {string} channelId App的Channel ID
   */
  initAndroid(appKey, channelId = '_default_') {
    NativeTrackingIO.initAndroid(appKey, channelId);
  }

  /**
   * 初始化SDK
   * @param {string} appKey SDK的appKey
   * @param {string} channelId App的Channel ID
   */
  initIOS(appKey, channelId = '_default_') {
    NativeTrackingIO.initIOS(appKey, channelId);
  }

  /**
   * 上报用户注册事件（建议注册成功后上报）
   * @param {string} userId
   */
  reportUserRegister(userId) {
    NativeTrackingIO.reportUserRegister(userId);
  }

  /**
   * 上报用户登录事件（建议登录成功后上报）
   * @param {string} userId
   */
  reportUserLogin(userId) {
    NativeTrackingIO.reportUserLogin(userId);
  }

  /**
   * 上报充值事件
   * @param {string} transactionId 业务ID
   * @param {string} paymentType 支付方式，如：alipay(支付宝), unionpay(银联), weixinpay(微信支付), yeepay(易宝支付), 不能填写FREE
   * @param {string} currencyType 币种，如：CNY(人民币)、USD(美金)等
   * @param {number} currencyAmount 充值金额（单位：元）
   */
  reportPayment(transactionId, paymentType, currencyType, currencyAmount) {
    NativeTrackingIO.reportPayment(transactionId, paymentType, currencyType, currencyAmount);
  }

  /**
   * 上报下单事件
   * @param {string} orderId 订单ID
   * @param {string} currencyType 币种，如：CNY(人民币)、USD(美金)等
   * @param {number} currencyAmount 订单金额
   */
  reportOrder(orderId, currencyType, currencyAmount) {
    NativeTrackingIO.reportOrder(orderId, currencyType, currencyAmount);
  }

  /**
   * 上报自定义事件
   * @param {string} eventName 自定义事件名
   * @param {object} eventData 事件对象
   */
  reportCustomEvent(eventName, eventData) {
    if (!eventData) {
      NativeTrackingIO.reportCustomEventNoData(eventName);
    } else {
      NativeTrackingIO.reportCustomEvent(eventName, eventData);
    }
  }

  /**
   * 释放资源
   */
  dispose() {
    NativeTrackingIO.dispose();
  }
}

module.exports = new EasyTrackingIO();
