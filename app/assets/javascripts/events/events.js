angular.module('motherFoucaults')
.factory('events', [
  '$http',
  function($http) {
  var obj = {
    events: []
  };
  obj.getAll = function() {
    return $http.get('/events.json').then(function(data) {
      angular.copy(data.data, obj.events);
    });
  };
  obj.create = function(event) {
    return $http.post('/events.json', event).then(function(data) {
      obj.events.push(data.data);
    });
  }
  return obj;
}])
