angular
    .module('Blog')
    .controller('SignupController',[
      '$scope',
      'DatePicker',
      function($scope,DatePicker) {
         $scope.datePicker = DatePicker;
         $scope.user = {};
         $scope.user.date = new Date();

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

         $scope.apply_class = function(form){
           if(form.$invalid && form.$dirty){
             return true;
           }
           if(form.$valid && form.$dirty){
             return true;
           }
         }
}]);
