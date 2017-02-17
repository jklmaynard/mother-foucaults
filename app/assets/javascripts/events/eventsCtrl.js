angular.module('motherFoucaults')
.controller('EventsCtrl', [
  '$scope',
  '$stateParams',
  'events',
  'Auth',
  function($scope, $stateParams, events, Auth){
    $scope.event = events.events[$stateParams.id];
    $scope.eventTitle = '';
    $scope.eventDescription = '';
    $scope.eventDate = '';
    $scope.eventTime = ''
    Auth.currentUser().then(function() {
      $scope.signedIn = Auth.isAuthenticated;
      $scope.logout = Auth.logout;
    });
    $scope.editEvent = function() {
      events.edit({
        id: $scope.event.id,
        title: $scope.eventTitle === '' ? $scope.event.title : $scope.eventTitle,
        date: $scope.eventDate === '' ? $scope.event.date : $scope.eventDate,
        description: $scope.eventDescription === '' ? $scope.event.description : $scope.eventDescription,
        time: $scope.eventTime === '' ? $scope.event.time : $scope.eventTime
      }, $scope.event).then(function(data) {
        return $scope.event = data;
      })
    };
  }
]);
