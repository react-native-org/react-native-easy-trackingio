package org.hstar.reactnative.trackingio;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reyun.tracking.sdk.Tracking;

import java.nio.channels.spi.AbstractSelectionKey;
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
     * Get app ID
     *
     * @param promise
     */
    @ReactMethod
    public void getAppId(Promise promise) {
        promise.resolve(Tracking.getAppId());
    }

    /**
     * Get channel ID
     *
     * @param promise
     */
    @ReactMethod
    public void getChannelId(Promise promise) {
        promise.resolve(Tracking.getChannelId());
    }

    /**
     * Get device ID
     *
     * @param promise
     */
    @ReactMethod
    public void getDeviceId(Promise promise) {
        promise.resolve(Tracking.getDeviceId());
    }

    /**
     * Get is app on foreground
     *
     * @param promise
     */
    @ReactMethod
    public void isAppOnForeground(Promise promise) {
        promise.resolve(Tracking.isAppOnForeground());
    }

    /**
     * Init tracking io with app key and channel ID
     *
     * @param appKey    The app key from trackingio central.
     * @param channelId The channel id.
     */
    @ReactMethod
    public void initAndroid(String appKey, String channelId) {
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
     * report when payment done.
     *
     * @param transactionId
     * @param paymentType
     * @param currencyType
     * @param currencyAmount
     */
    @ReactMethod
    public void reportPayment(String transactionId, String paymentType, String currencyType, float currencyAmount) {
        Tracking.setPayment(transactionId, paymentType, currencyType, currencyAmount);
    }

    /**
     * Report when order done.
     *
     * @param transactionId
     * @param currencyType
     * @param currencyAmount
     */
    @ReactMethod
    public void reportOrder(String transactionId, String currencyType, float currencyAmount) {
        Tracking.setOrder(transactionId, currencyType, currencyAmount);
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
     * Report custom event with no event data.
     *
     * @param eventName
     */
    public void reportCustomEventNoData(String eventName) {
        Tracking.setEvent(eventName);
    }

    /**
     * Dispose the sdk
     */
    @ReactMethod
    public void dispose() {
        Tracking.exitSdk();
    }
}
