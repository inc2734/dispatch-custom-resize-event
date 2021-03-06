'use strict';

import addCustomEvent from '@inc2734/add-custom-event';

let defaultWindowWidth  = window.innerWidth;
let defaultWindowHeight = window.innerHeight;

const updateDefaultWindowSize = () => {
  defaultWindowWidth  = window.innerWidth;
  defaultWindowHeight = window.innerHeight;
};

const resizeWidth = () => {
  addCustomEvent(window, 'resize:width');
};

const resizeHeight = () => {
  addCustomEvent(window, 'resize:height');

  if (window.innerHeight === defaultWindowHeight) {
    addCustomEvent(window, 'resize:height:undo');
  } else {
    addCustomEvent(window, 'resize:height:update');

    // For UITabBar displaying. Verification required.
    const isiOS = /iP(hone|(o|a)d)/.test(navigator.userAgent);
    if (49 < Math.abs(window.innerHeight - defaultWindowHeight) && isiOS) {
      addCustomEvent(window, 'resize:height:ios');
    }
  }
};

const onResize = () => {
  if (window.innerWidth !== defaultWindowWidth) {
    resizeWidth();
    updateDefaultWindowSize();
  } else {
    resizeHeight();
  }
};

const dispatch = () => {
  const sessionKey = 'inc2734/dispatch-custom-resize-event/dispatch';
  const didDispatch = Boolean(sessionStorage.getItem(sessionKey)) || false;

  if (! didDispatch) {
    window.addEventListener('resize', onResize, false);
  }

  sessionStorage.setItem(sessionKey, true);
  window.addEventListener('beforeunload', () => sessionStorage.removeItem(sessionKey), false);
};

dispatch();
