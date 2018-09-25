

package com.reacttutorialapp;

import android.widget.ProgressBar;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import android.view.View;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.bridge.ReactApplicationContext;


class MyCustomView extends View {

    public MyCustomView(ReactApplicationContext reactContext) {
        super(reactContext);
    }


    public void onReceiveNativeEvent() {
        WritableMap event = Arguments.createMap();
        event.putString("message", "MyMessage");
        ThemedReactContext reactContext = (ThemedReactContext)getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent( getId(), "topChange", event );
    }
}
