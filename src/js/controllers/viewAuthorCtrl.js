angular
  .module('Blog')
  .controller('viewAuthorCtrl', ['$scope', '$stateParams','GetRequest',
  function($scope, $stateParams,GetRequest) {

      GetRequest.get_data('../src/data/users.json').then(function(resp){
        $scope.users = resp.data;

        console.log($scope.users);
        GetRequest.get_data('../src/data/articles.json').then(function(resp){

          $scope.art = resp.data;

          for(var i=0; i<$scope.users.length; i++){
            if($scope.users[i].id === $stateParams.id){
              $scope.author = $scope.users[i];
            }
          }
      });
    });
}]);
