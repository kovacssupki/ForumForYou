'use strict';

angular
  .module('Blog')
  .directive('contactModal', function() {
    return {
       restrict: 'E',
       templateUrl:'views/directives/contactModal.html',
       controller:function($scope,Validate){
         $scope.validate = Validate;
         $scope.user = {};
      
       }
    };
});
