package com.reacttutorialapp;

import android.widget.ProgressBar;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import java.util.*;
import com.facebook.react.common.MapBuilder;

public abstract class ReactImageManager extends SimpleViewManager<MyCustomView> {

    public static final String REACT_CLASS = "RCTImageView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

//    @Override
//    public ReactImageView createViewInstance(ThemedReactContext context) {
//        return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), mCallerContext);
//    }
//
//
//    @ReactProp(name = "src")
//    public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {
//        view.setSource(sources);
//    }
//
//    @ReactProp(name = "borderRadius", defaultFloat = 0f)
//    public void setBorderRadius(ReactImageView view, float borderRadius) {
//        view.setBorderRadius(borderRadius);
//    }
//
//    @ReactProp(name = ViewProps.RESIZE_MODE)
//    public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
//        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
//    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put("topChange", MapBuilder.of("phasedRegistrationNames", MapBuilder.of("bubbled", "onChange")))
                .build();
    }
}