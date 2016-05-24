(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxChatBubble', [function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div data-bubble-type="{{bubbleType}}" class="ng-widget-chat-bubble {{cssClass}}" ng-transclude></div>',
      scope: {
        bubbleType:'@',
        cssClass:'@'
      }
    };
  }]);

})();
