package com.reacttutorialapp;


import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.Map;
import java.util.HashMap;
import android.widget.Toast;

public class ToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";


    ReactApplicationContext reactContext;
    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }


    @Override
    public String getName() {
        return "ToastExample";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }


    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();


    }

    @ReactMethod
    public void sendEvent(){
        onConnected();
    }


    private void onConnected() {
        // Create map for params
        WritableMap params = Arguments.createMap();
        // Put data to map
        params.putString("sessionId", "session.getSessionId" );
        // Get EventEmitter from context and send event thanks to it
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit("onSessionConnect", params);
    }


//    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
//        // this gets the handle to the javascript module associated with the
//        // RCTDeviceEventEmitter's instance in the current context
//        // (i.e. for the currently running app)
//        // then emits an event (a WritableMap is the java equivalent of a js object)
//
//
//
//        reactContext
//                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
//                .emit(eventName, params);
//    }


}