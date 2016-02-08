angular
  .module('Blog')
  .controller('AdminCtrl', [
    '$scope',
    'DatePicker',
    'Validate',
    'GetRequest',
    function($scope,DatePicker,Validate,GetRequest) {
        $scope.search = {};
        $scope.by = '$';
        $scope.datePicker = DatePicker;
        GetRequest.get_data('../src/data/users.json').then(function(resp){
          $scope.users = resp.data;
        });

        GetRequest.get_data('../src/data/articles.json').then(function(resp){
          $scope.art = resp.data;
        });

        $scope.display = true;
        $scope.save = function(){
          $scope.display = true;
         };
        $scope.edit = function(){
          $scope.display = false;
        };

}]);
