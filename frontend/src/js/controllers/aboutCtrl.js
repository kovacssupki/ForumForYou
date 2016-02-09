angular
  .module('Blog')
  .controller('aboutCtrl', ['$scope','$stateParams','GetRequest',
  function($scope, $stateParams, GetRequest) {

    GetRequest.get_data('../src/data/users.json').then(function(response){
      $scope.authors = response.data;
    });

}]);
