angular.module('motherFoucaults')
.factory('events', [
  '$http',
  function($http) {
  var obj = {
    events: []
  };
  obj.getAll = function() {
    return $http.get('/events.json').then(function(data) {
      data.data.forEach(function(index) {
        if (index.description) {
          index.snippet = index.description.slice(0, 140)+' (. . .)';
        }
      });
      angular.copy(data.data, obj.events);
    });
  };
  obj.create = function(event) {
    return $http.post('/events.json', event).then(function(data) {
      obj.events.push(data.data);
      obj.events.sort(function(a,b) {
        return new Date(a.date) - new Date(b.date);
      });
    });
  };
  obj.like = function(event) {
    return $http.put('/events/' + event.id + '/likes.json').then(function(data){
      event.likes += 1;
    });
  };
  obj.delete = function(event) {
    position = obj.events.indexOf(event);
    return $http.delete('/events/' + event.id).then(function(data) {
      obj.events.splice(position, 1);
    });
  };
  return obj;
}]);
