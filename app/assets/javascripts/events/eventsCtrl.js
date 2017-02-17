angular.module('motherFoucaults')
.controller('EventsCtrl', [
  '$scope',
  '$stateParams',
  'events',
  'Auth',
  function($scope, $stateParams, events, Auth){
    $scope.event = events.events[$stateParams.id];
    $scope.eventTitle = '';
    $scope.eventDate = '';
    $scope.eventTime = '';
    $scope.eventDescription = '';
    $scope.descriptionArray = events.decodeDescription($scope.event.description);
    //take encoded description from events obj, write some DOM elements onto the page
    $scope.setDOMNode = function(arr, elementId) {
      var div = document.getElementById(elementId);
      arr.forEach(function(obj) {
        var el, text;
        el = document.createElement(obj.el);
        if (obj.content !== null) {
          text = document.createTextNode(obj.content);
          el.appendChild(text);
        }
        div.appendChild(el);
      });
    }
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
    $scope.setDOMNode($scope.descriptionArray, 'event-description');;
  }
]);
