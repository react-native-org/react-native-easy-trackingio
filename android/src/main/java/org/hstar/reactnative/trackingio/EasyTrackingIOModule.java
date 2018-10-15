package org.hstar.reactnative.trackingio;

import android.content.Context;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;
import com.reyun.tracking.sdk.Tracking;

import java.util.HashMap;

public class EasyTrackingIOModule extends ReactContextBaseJavaModule {

    public EasyTrackingIOModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "EasyTrackingIO";
    }
}
