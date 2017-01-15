angular.module('motherFoucaults')
.controller('MainCtrl', [
  '$scope',
  'events',
  function($scope, events){
    $scope.events = events.events.sort(function(a,b) {
      return new Date(a.date) - new Date(b.date);
    });
    $scope.addEvent = function() {
      if (!$scope.title || $scope.title === '') {
        return;
      }
      events.create({
        title: $scope.title,
        date: $scope.date,
        description: $scope.description,
        likes: 0,
      });
      $scope.title = '';
      $scope.description = '';
      $scope.date = '';
    };
    $scope.likeEvent = function(event) {
      events.like(event);
    }
  }
]);
