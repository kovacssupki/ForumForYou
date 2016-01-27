angular
    .module('Blog')
    .controller('SignupController',['$scope','DatePicker','Validate',function($scope,DatePicker,Validate) {

         $scope.datePicker = DatePicker;
         $scope.validate = Validate;
         $scope.user = {};

}]);
