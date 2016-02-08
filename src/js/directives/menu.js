angular.module('Blog')
.directive('menu',function(){
   return{
      restrict:'E',
      templateUrl:'views/directives/menu.html',
      controller: function($scope,$location){
        $scope.isActive = function(route) {
            return route === $location.path();
        }
      }
   }
});
