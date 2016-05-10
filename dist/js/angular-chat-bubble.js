/* eslint no-unused-vars:0 */
var ChatBubbleModule = angular.module('chat-bubble', []),
  extend = angular.extend,
  forEach = angular.forEach,
  jqLite = angular.element,
  noop = angular.noop;

ToastModule
  .directive('chatBubble', [function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div data-bubble-type="left" class="ng-widget-chat-bubble {{cssClass}}" ng-bind-html="msg"></div>',
      scope: true
    };
  }]);
