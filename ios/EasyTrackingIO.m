#import "EasyTrackingIO.h"
#import "Tracking.h"

@implementation EasyTrackingIO

RCT_EXPORT_MODULE();

+(void) init:(NSString *)appID channelID:(NSString *)channelID{
    [Tracking initWithAppKey:appID withChannelId: channelID];
}

RCT_EXPORT_METHOD(reportUserLogin:(NSString *)accountId){
  [Tracking setLoginWithAccountID: accountId];
}

RCT_EXPORT_METHOD(reportUserRegister:(NSString *)accountId){
  [Tracking setRegisterWithAccountID: accountId];
}

RCT_EXPORT_METHOD(repoertOrder:(NSString *)ryTID hbType:(NSString*)hbType hbAmount:(float)hbAmount){
  [Tracking setDD:ryTID hbType:hbType hbAmount:hbAmount];
}

RCT_EXPORT_METHOD(setRyzf:(NSString *)ryTID ryzfType:(NSString*)ryzfType hbType:(NSString*)hbType hbAmount:(float)hbAmount){
  [Tracking setRyzf:ryTID ryzfType:ryzfType hbType:hbType hbAmount:hbAmount];
}

RCT_EXPORT_METHOD(getDeviceId:(NSString*)getDeviceId){
  [Tracking getDeviceId];
}
@end
