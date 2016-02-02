angular
  .module('Blog')
  .controller('AdminCtrl', [
    '$scope',
    'DatePicker',
    'Validate',
    'GetRequest',
    '$http',
    function($scope,DatePicker,Validate,GetRequest,$http) {
        $scope.search = {};
        $scope.by = '$';
        $scope.datePicker = DatePicker;
        $scope.validate = Validate;
        
        GetRequest.get_data('../src/data/users.json').then(function(resp){
          $scope.users = resp.data;
        });

        GetRequest.get_data('../src/data/articles.json').then(function(resp){
          $scope.art = resp.data;
        });

        $scope.display = true;
        $scope.save = function(){
            $scope.display = true;
         }
        $scope.edit = function(){
          $scope.display = false;
        };
        // $scope.save = function(){
        //   $scope.display = true;
        // };
}]);
