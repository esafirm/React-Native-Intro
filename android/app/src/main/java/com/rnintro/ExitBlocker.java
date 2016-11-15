package com.rnintro;

import static java.lang.System.currentTimeMillis;

public class ExitBlocker {

    private static final int EXIT_THRESHOLD = 1000;

    private long lastBack;

    /**
     * @return will return `true` if last request is shorter than threshold
     */
    public boolean requestExit() {
        if (lastBack == 0) {
            lastBack = currentTimeMillis();
            return false;
        }
        try {
            return System.currentTimeMillis() - lastBack < EXIT_THRESHOLD;
        } finally {
            lastBack = 0;
        }
    }
}
