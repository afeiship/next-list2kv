#angular-chat-bubble
An ios7 style chat bubble,based on angularjs &amp; sass.


##usage:
+ html part:
```html

<div class="container">

  <nx-chat-bubble bubble-type="left">Hey there! What's up?</nx-chat-bubble>
    <div class="clear"></div>
    <nx-chat-bubble bubble-type="right">Checking out iOS7 you know..</nx-chat-bubble>
    <div class="clear"></div>
    <nx-chat-bubble bubble-type="left">Check out this bubble!</nx-chat-bubble>
    <div class="clear"></div>
    <nx-chat-bubble bubble-type="right">It's pretty cool!</nx-chat-bubble>
    <div class="clear"></div>
    <nx-chat-bubble bubble-type="left">我想试试中文的效果如何?</nx-chat-bubble>
    <div class="clear"></div>
    <nx-chat-bubble bubble-type="right" css-class="testCls">如果是大段大段的中文呢?如果是大段大段的中文呢?如果是大段大段的中文呢?如果是大段大段的中文呢?如果是大段大段的中文呢?</nx-chat-bubble>
    <div class="clear"></div>
    <nx-chat-bubble bubble-type="left">效果还是不错哦!</nx-chat-bubble>

</div>
```

+ javascript part:
```javascript

var TestModule = angular.module('TestApp', ['nx.widget'])
    .controller('MainCtrl', function ($scope) {
      console.log('initial main ctrl!');
    });

```


##resouces:
+ IonicBubble:
+ http://codepen.io/rossmartin/pen/XJmpQr
+ NormalBubble:
+ http://jsfiddle.net/anuradhabajpai/x8C8S/10/
+ Ios7Bubble:
+ http://codepen.io/samuelkraft/pen/Farhl
+ Ios6Bubble:
+ http://blog.templatemonster.com/demos/pure-css-chat-bubbles-for-instant-messaging-ui/demo/index.html
