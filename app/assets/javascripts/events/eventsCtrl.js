angular.module('motherFoucaults')
.controller('EventsCtrl', [
  '$scope',
  '$stateParams',
  'events',
  function($scope, $stateParams, events){
    $scope.event = events.events[$stateParams.id];
  }
]);
