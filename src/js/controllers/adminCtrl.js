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

        // $scope.add = function(event) {
        //   var data = $scope.users[0].firstName;
        //   console.log(data);
        //   var data = JSON.stringify({$scope.users[0].firstName});
        //   // if(event.keyCode == 13){
        //     $http.post('http://localhost/PROJECTS/github/ForumForYou/src/data/users.json',data).then(function(resp){
        //       return resp;
        //     });
        //   // }
        // }

        $scope.display = true;
        $scope.edit = function(){
          $scope.display = false;
        };
        $scope.save = function(){
          $scope.display = true;
        };
}]);
