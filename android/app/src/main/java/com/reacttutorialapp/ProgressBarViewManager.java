package com.reacttutorialapp;

import android.widget.ProgressBar;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import android.widget.Toast;

public class ProgressBarViewManager extends SimpleViewManager<ProgressBar> {

    public static final String REACT_CLASS = "ProgressBarView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected ProgressBar createViewInstance(ThemedReactContext reactContext) {
        ProgressBar progressBar = new ProgressBar(reactContext, null, android.R.attr.progressBarStyleHorizontal);
        return progressBar;
    }

    @ReactProp(name = "progress", defaultInt = 0)
    public void setProgress(ProgressBar view, int progress) {
//        Toast.makeText( "Progress ", Toast.LENGTH_SHORT).show() ;
        view.setProgress(progress);
    }

    @ReactProp(name = "indeterminate", defaultBoolean = false)
    public void setIndeterminate(ProgressBar view, boolean indeterminate) {
        view.setIndeterminate(indeterminate);
    }

//    @ReactProp(name = "orientation", defaultString = Horizontal)
//    public void setOrientation(ProgressBar view, String orientation) {
////        view.setOrientation(orientation);
//    }




}