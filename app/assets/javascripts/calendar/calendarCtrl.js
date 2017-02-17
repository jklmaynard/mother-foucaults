angular.module('motherFoucaults')
.controller('CalendarCtrl', [
  '$scope',
  '$compile',
  'events',
  function($scope, $compile, events) {
    $scope.events = [];
    events.events.forEach(function(index) {
      var d, m, y;
      newDate = new Date(index.date);
      d = newDate.getDate();
      m = newDate.getMonth();
      y = newDate.getFullYear();
      hr = index.time === null ? 19 : index.time;
      $scope.events.push({
        title: index.title,
        date: index.date,
        time: index.time === null ? hr : index.time,
        start: new Date(y, m, d, hr)
      });
    });
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
