angular.module('motherFoucaults')
.factory('events', [
  '$http',
  function($http) {
  var obj = {
    events: []
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
  obj.delete = function(event) {
    position = obj.events.indexOf(event);
    return $http.delete('/events/' + event.id).then(function(data) {
      obj.events.splice(position, 1);
    });
  };
  obj.edit = function(event, updatedEvent) {
    return $http.put('/events/' + event.id + '.json', event).then(function(data) {
      return updatedEvent = event;
    })
  }
  obj.getAll = function() {
    return $http.get('/events.json').then(function(data) {
      data.data.forEach(function(index) {
        if (index.description) {
          index.snippet = index.description.slice(0, 300)+' (. . .)';
        }
      });
      data.data.sort(function(a,b) {
        return new Date(a.date) - new Date(b.date);
      });
      angular.copy(data.data, obj.events);
    });
  };
  obj.getEvent = function(event) {
    return $http.get('/events' + event.id + '.json').then(function(data) {
      return event;
    });
  };
  obj.like = function(event) {
    return $http.put('/events/' + event.id + '/likes.json').then(function(data){
      event.likes += 1;
    });
  };
  obj.numberizeEventTime = function(str) {
    var int, timeArray = str.toLowerCase().split(' ');
    if (timeArray.length !== 2) {
      alert("Please make sure your hour and the ante/post meridian are separated by a space.")
    }
    if (timeArray[1] === 'am') {
      int = parseInt(timeArray[0]);
    } else if (timeArray[1] === 'pm') {
      int = (parseInt(timeArray[0]) + 12);
    } else {
      alert('something went wrong')
    }
    return int;
  }
  return obj;
}]);
