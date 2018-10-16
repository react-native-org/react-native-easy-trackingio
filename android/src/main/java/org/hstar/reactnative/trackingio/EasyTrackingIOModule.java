package org.hstar.reactnative.trackingio;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reyun.tracking.sdk.Tracking;

import java.util.Map;

public class EasyTrackingIOModule extends ReactContextBaseJavaModule {

    ReactApplicationContext reactContext;

    public EasyTrackingIOModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "EasyTrackingIO";
    }

    /**
     * Init tracking io with app key and channel ID
     *
     * @param appKey    The app key from trackingio central.
     * @param channelId The channel id.
     */
    @ReactMethod
    public void init(String appKey, String channelId) {
        Tracking.initWithKeyAndChannelId(this.reactContext, appKey, channelId);
    }

    /**
     * Call when user finish register.
     *
     * @param accountId user ID
     */
    @ReactMethod
    public void reportUserRegister(String accountId) {
        Tracking.setRegisterWithAccountID(accountId);
    }

    /**
     * Call when user finish login.
     *
     * @param accountId
     */
    @ReactMethod
    public void reportUserLogin(String accountId) {
        Tracking.setLoginSuccessBusiness(accountId);
    }

    /**
     * Set/unset debug mode.
     *
     * @param debugMode Debug mode
     */
    @ReactMethod
    public void setDebugMode(Boolean debugMode) {
        Tracking.setDebugMode(debugMode);
    }

    /**
     * Get app ID
     *
     * @return
     */
    @ReactMethod
    public String getAppId() {
        return Tracking.getAppId();
    }

    /**
     * Get channel ID
     *
     * @return
     */
    @ReactMethod
    public String getChannelId() {
        return Tracking.getChannelId();
    }

    /**
     * Get device ID
     *
     * @return
     */
    @ReactMethod
    public String getDeviceId() {
        return Tracking.getDeviceId();
    }

    /**
     * Report custom event.
     *
     * @param eventName
     * @param eventData
     */
    @ReactMethod
    public void reportCustomEvent(String eventName, Map<String, Object> eventData) {
        Tracking.setEvent(eventName, eventData);
    }

    /**
     * Dispose the sdk
     */
    @ReactMethod
    public void dispose() {
        Tracking.exitSdk();
    }
}
