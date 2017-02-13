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
  }
]);
