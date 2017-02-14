angular.module('motherFoucaults')
  .controller('CarouselCtrl', [
    '$scope',
    function($scope) {
      $scope.myInterval = 3000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = [
        {id: 0, image: '/images/carousel-1.png'},
        {id: 1, image: '/images/carousel-2.png'},
        {id: 2, image: '/images/carousel-3.png'}
      ];
      var currIndex = 0;
    }
  ]);
