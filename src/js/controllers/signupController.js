angular.module('Blog')
.controller('SignupController', function($scope) {

   $scope.check_min_length = function(form){
      if(form.$error.minlength){
         return true;
      }
   };

   $scope.check_max_length = function(form){
      if(form.$error.maxlength){
         return true;
      }
   };

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

   $scope.signup = function(form) {
      if (form.$valid) {
         alert('CONGRATULATIONS! YOU\'VE SIGNED UP IN SUCCESSFULLY!');
      }else{
         alert('INCORECT CREDENTIALS! TRY AGAIN!');
      }
   };
});
