angular.module('motherFoucaults')
.controller('CalendarCtrl', [
  '$scope',
  'events',
  function($scope, events) {
    eventSource = [];
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
  }
]);
