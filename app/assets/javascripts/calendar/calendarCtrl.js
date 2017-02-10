angular.module('motherFoucaults')
.controller('CalendarCtrl', [
  '$scope',
  'events',
  function($scope, events) {
    $scope.eventsArray = [
      {title: "This Event", start: new Date(2017, 2, 1)}
    ];
    // events.events.forEach(function(event) {
    //   var newObj = {
    //     title: event.title,
    //     start: event.date
    //   }
    //   $scope.eventsArray.push(newObj);
    // });
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
    $scope.eventSource = $scope.eventsArray;
  }
]);
