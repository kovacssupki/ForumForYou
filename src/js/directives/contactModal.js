'use strict';

angular
    .module('Blog')
    .directive('contactModal', function() {
        return {
           restrict: 'E',
           templateUrl:'views/directives/contactModal.html',
           controller:function($scope){
             $scope.user = {};

             $scope.required = function(form){
                if(form.$error.required && form.$dirty && !form.$error.minlength && !form.$error.maxlength){
                   return true;
                }
             };

             $scope.valid = function(form){
                if(form.$invalid && form.$error.pattern){
                   return true;
                }
             };
           }
   };
});
