angular
  .module('Blog')
  .controller('aboutCtrl', ['$scope','$stateParams','GetRequest',
  function($scope, $stateParams, GetRequest) {

    GetRequest.get_data('../src/data/users.json').then(function(resp){
      $scope.authors = resp.data;
    });

}]);
