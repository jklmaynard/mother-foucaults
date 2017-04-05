angular.module('motherFoucaults')
.controller('MainCtrl', [
  '$scope',
  'events',
  'Auth',
  '$state',
  function($scope, events, Auth, $state) {
      Auth.currentUser().then(function() {
        $scope.signedIn = Auth.isAuthenticated;
      }, function(err) {
        return;
      });
    $scope.events = events.events.sort(function(a,b) {
      return new Date(a.date) - new Date(b.date);
    });
    $scope.addEvent = function() {
      if (Auth.isAuthenticated() === true) {
        if (!$scope.title || $scope.title === '') {
          return;
        }
        //Change time from meridian string to integer -- quietly fail if undefined
        $scope.timeInt = events.numberizeEventTime($scope.time)
        if ($scope.timeInt === undefined) {
          return;
        }
        //Create event through events.js object
        events.create({
          title: $scope.title,
          date: $scope.date,
          description: encodeURI($scope.description),
          likes: 0,
          snippet: $scope.description.slice(0, 300),
          time: $scope.timeInt,
          image: $scope.image
        });
        //Back to home page
        $state.go('home');
      }
    };
    $scope.likeEvent = function(event) {
      events.like(event);
    };
    $scope.deleteEvent = function(event) {
      if (Auth.isAuthenticated() === true) {
        events.delete(event);
      }
    }
  }
]);
