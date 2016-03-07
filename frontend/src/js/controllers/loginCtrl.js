angular
  .module('Blog')
  .controller('LoginController', ['$scope', 'DatePicker', 'Validate', 'PutRequest', '$log',
    function($scope, DatePicker, Validate, PutRequest, $log) {

      $scope.user = {};
      //$scope.user.updatedAt = new Date(); //default value for date

      $scope.Login = function(user) {

        $scope.errorMessage = null; //hide any previous shown error message
        PutRequest.put_data('../user/login', user).then(function(response) {
          //console.log(response);
            $scope.successMessage = "User logged in successfully";
            $scope.user = {}; //reset form
            $scope.login.$setPristine(); //reset form
          }, function(errorObject) {
            //console.log(errorObject.data.data);
            $scope.errorMessage = errorObject.data.data;

          });
      };
    }]);
