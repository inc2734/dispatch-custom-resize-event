# dispatchCustomResizeEvent

## Get started

### Install
```
$ npm install @inc2734/dispatch-custom-resize-event
```

### Example

```
import '@inc2734/dispatch-custom-resize-event';

// Fire when only resize width
window.addEventListener('resize:width', ..., false);

// Fire when only resize height (For iOS browser)
window.addEventListener('resize:height', ..., false);

// Fire when the tabbar is shown (For iOS browser)
window.addEventListener('resize:height:undo', ..., false);

// Fire when the tabbar is hidden (For iOS browser)
window.addEventListener('resize:height:update', ..., false);
```

## License
MIT
