angular.module('motherFoucaults', ['ui.router', 'templates', 'ui.calendar', 'Devise', 'ui.bootstrap', 'naif.base64'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        eventPromise: ['events', function(events) {
          return events.getAll();
        }]
      }
    });
    $stateProvider.state('new-event', {
      url: '/new-event',
      templateUrl: 'static/_new-event.html',
      controller: 'MainCtrl'
    });
    $stateProvider.state('events', {
      url: '/events/{id}',
      templateUrl: 'events/_events.html',
      controller: 'EventsCtrl',
      resolve: {
        eventPromise: ['events', function(events) {
          return events.getAll();
        }]
      }
    });
    $stateProvider.state('calendar', {
      url: '/calendar',
      templateUrl: 'calendar/_calendar.html',
      controller: 'CalendarCtrl',
      resolve: {
        eventPromise: ['events', function(events) {
          return events.getAll();
        }]
      }
    });
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home');
        }, function(err) {
          return;
        });
      }]
    });
    $urlRouterProvider.otherwise('home');
  }]);
