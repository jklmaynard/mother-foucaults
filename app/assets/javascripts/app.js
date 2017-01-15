angular.module('motherFoucaults', ['ui.router', 'templates'])
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
    })
    $stateProvider.state('events', {
      url: '/events/{id}',
      templateUrl: 'events/_events.html',
      controller: 'EventsCtrl'
    })
    $stateProvider.state('calendar', {
      url: '/calendar',
      templateUrl: 'calendar/_calendar.html',
      controller: 'MainCtrl',
      resolve: {
        eventPromise: ['events', function(events) {
          return events.getAll();
        }]
      }
    })
    $urlRouterProvider.otherwise('home');
  }])
