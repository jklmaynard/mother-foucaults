angular.module('motherFoucaults')
.controller('EventsCtrl', [
  '$scope',
  '$stateParams',
  'events',
  'Auth',
  function($scope, $stateParams, events, Auth){
    $scope.event = events.events[$stateParams.id];
    Auth.currentUser().then(function() {
      $scope.signedIn = Auth.isAuthenticated;
      $scope.logout = Auth.logout;
    });
    $scope.editEvent = function(event) {
      events.edit({
        id: event.id,
        title: $scope.title === undefined ? event.title : $scope.title,
        date: $scope.date === undefined ? event.date : $scope.date,
        description: $scope.description === undefined ? event.description : $scope.description
      })
    };
  }
]);
