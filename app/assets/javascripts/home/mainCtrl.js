angular.module('motherFoucaults')
.controller('MainCtrl', [
  '$scope',
  'events',
  'Auth',
  function($scope, events, Auth) {
    Auth.currentUser().then(function() {
      $scope.signedIn = Auth.isAuthenticated;
    }, function(err) {
      return;
    });
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
        snippet: $scope.description.slice(0, 300)
      });
      $scope.title = '';
      $scope.description = '';
      $scope.date = '';
    };
    $scope.likeEvent = function(event) {
      events.like(event);
    };
    $scope.deleteEvent = function(event) {
      events.delete(event);
    }
  }
]);
