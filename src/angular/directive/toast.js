ToastModule
  .directive('chatBubble', [function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div data-bubble-type="left" class="ng-widget-toast {{cssClass}}" ng-bind-html="msg"></div>',
      scope: true
    };
  }]);
