angular.module('motherFoucaults')
.controller('CalendarCtrl', [
  '$scope',
  '$compile',
  'events',
  function($scope, $compile, events) {
    $scope.events = events.events;
    $scope.eventRender = function (events, element, view) {
      element.attr({
        'tooltip': event.title,
        'tooltip-append-to-body': true
      });
      $compile(element)($scope);
    }
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventRender: $scope.eventRender
      }
    };
    $scope.eventSource = [$scope.events];
  }
]);
