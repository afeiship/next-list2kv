#angular-chat-bubble
An ios7 style chat bubble,based on angularjs &amp; sass.


##usage:
+ html part:
```html

<chat-bubble bubble-type="left">Testbubble</chat-bubble>
<chat-bubble bubble-type="right">RighbBubble</chat-bubble>

```

+ javascript part:
```javascript

var TestModule = angular.module('TestApp', ['chat-bubble'])
    .controller('MainCtrl', function ($scope) {
      console.log('initial main ctrl!');
    });

```
