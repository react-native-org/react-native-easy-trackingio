#import "EasyTrackingIO.h"
#import "Tracking.h"

@implementation EasyTrackingIO

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getAppId,
                 getAppIdWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject){
    NSString *appId =  NULL;
    resolve(appId);
}

RCT_REMAP_METHOD(getChannelId,
                 getChannelIdWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject){
    NSString *channelId =  NULL;
    resolve(channelId);
}

RCT_REMAP_METHOD(getDeviceId,
                 getDeviceIdWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject){
    NSString *deviceId =  [Tracking getDeviceId];
    resolve(deviceId);
}

RCT_REMAP_METHOD(isAppOnForeground,
                 isAppOnForegroundWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject){
    NSString *isAppOnForeground=NULL;
    resolve(isAppOnForeground);
}

RCT_EXPORT_METHOD(initIOS:(NSString *)appKey channelId:(NSString *)channelId){
    [Tracking initWithAppKey:appKey withChannelId: channelId];
}

RCT_EXPORT_METHOD(reportUserLogin:(NSString *)userId){
    [Tracking setLoginWithAccountID: userId];
}

RCT_EXPORT_METHOD(reportUserRegister:(NSString *)userId){
    [Tracking setRegisterWithAccountID: userId];
}

RCT_EXPORT_METHOD(setDebugMode:(BOOL *)debugMode){
    [Tracking setPrintLog:debugMode];
}

RCT_EXPORT_METHOD(reportOrder:(NSString *)orderId
                  currencyType:(NSString*)currencyType
                  currencyAmount:(float)currencyAmount){
    [Tracking setDD:orderId hbType:currencyType hbAmount:currencyAmount];
}

RCT_EXPORT_METHOD(reportPayment:(NSString *)transactionId
                  paymentType:(NSString *)paymentType
                  currencyType:(NSString *)currencyType
                  currencyAmount:(float)currencyAmount){
    [Tracking setRyzf:transactionId ryzfType:paymentType hbType:currencyType hbAmount:currencyAmount];
}

RCT_EXPORT_METHOD(reportCustomEvent){
}

RCT_EXPORT_METHOD(reportCustomEventNoData:(NSString *)eventName){
    [Tracking setEvent:eventName];
}

RCT_EXPORT_METHOD(dispose){
}




@end
