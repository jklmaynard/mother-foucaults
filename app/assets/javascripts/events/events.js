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
          index.snippet = index.description.slice(0, 300)+' (. . .)';
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
      return obj.events;
    });
  };
  obj.like = function(event) {
    return $http.put('/events/' + event.id + '/likes.json').then(function(data){
      event.likes += 1;
    });
  };
  obj.edit = function(event) {
    return $http.put('/events/' + event.id + '.json', event).then(function(data) {
      event.title = data.title;
      event.description = data.description;
      event.date = data.date;
    })
  }
  obj.delete = function(event) {
    position = obj.events.indexOf(event);
    return $http.delete('/events/' + event.id).then(function(data) {
      obj.events.splice(position, 1);
    });
  };
  return obj;
}]);
