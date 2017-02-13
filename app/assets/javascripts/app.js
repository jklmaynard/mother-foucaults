angular.module('motherFoucaults', ['ui.router', 'templates', 'ui.calendar', 'Devise'])
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
    $stateProvider.state('events', {
      url: '/events/{id}',
      templateUrl: 'events/_events.html',
      controller: 'EventsCtrl'
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
        });
      }]
    });
    $urlRouterProvider.otherwise('home');
  }]);
