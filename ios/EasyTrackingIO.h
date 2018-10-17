#import <React/RCTBridgeModule.h>

@interface EasyTrackingIO : NSObject <RCTBridgeModule>

+(void) init:(NSString *)appID channelID:(NSString *)channelID;

@end
