angular.module('motherFoucaults')
.controller('NavCtrl', [
  '$scope',
  'Auth',
  function($scope, Auth) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;
    if (Auth.isAuthenticated === true) {
      Auth.currentUser().then(function (user){
        $scope.user = user;
      }, function (err) {
        return;
      });
    }
    $scope.$on('devise:login', function(e, user) {
      $scope.user = user;
    });
    $scope.$on('devise:logout', function(e, user) {
      $scope.user = {};
    });
  }
]);
