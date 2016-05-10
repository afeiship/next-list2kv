/* eslint no-unused-vars:0 */
var ChatBubbleModule = angular.module('chat-bubble', []),
  extend = angular.extend,
  forEach = angular.forEach,
  jqLite = angular.element,
  noop = angular.noop;

ChatBubbleModule
  .directive('chatBubble', [function () {
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
