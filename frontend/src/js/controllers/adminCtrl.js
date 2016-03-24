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
        GetRequest.get_data('../users').then(function(resp){
          if(resp.data.data.currentUser)
          {
          $scope.author = resp.data.data.currentUser; //get the current user name
        }
        $scope.users = resp.data.data.allUsers;
        console.log($scope.users);

        });

         GetRequest.get_data('../article/post').then(function(resp){
           $scope.art = resp.data.data;
           console.log($scope.art);
         });

        GetRequest.get_data('../article/categories').then(function(resp){
          $scope.categories = resp.data.data;
          $scope.defaultCategories = [];
          console.log($scope.defaultCategories);
        });



        $scope.display = true;
        $scope.save = function(){
          $scope.display = true;
         };
        $scope.edit = function(){
          $scope.display = false;
        };

}]);
