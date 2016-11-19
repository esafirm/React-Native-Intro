package com.rnintro;

import android.widget.Toast;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    private ExitBlocker exitBlocker = new ExitBlocker();

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "rnintro";
    }

    @Override
    public void finish() {
        if (exitBlocker.requestExit()) {
            super.finish();
        }
        Toast.makeText(getApplicationContext(), "Cabut lu?", Toast.LENGTH_SHORT).show();
    }
}
