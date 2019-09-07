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

  window.innerHeight === defaultWindowHeight
    ? addCustomEvent(window, 'resize:height:undo')
    : addCustomEvent(window, 'resize:height:update');
};

const onResize = () => {
  if (window.innerWidth !== defaultWindowWidth) {
    resizeWidth();
    updateDefaultWindowSize();
  } else {
    resizeHeight();
  }
};

document.addEventListener('resize', onResize, false);
