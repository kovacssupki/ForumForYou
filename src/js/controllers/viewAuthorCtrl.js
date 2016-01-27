angular
  .module('Blog')
  .controller('viewAuthorCtrl', ['$scope', '$stateParams','Users',
  function($scope, $stateParams,Users) {
      $scope.authors = Users;
      $scope.author = $scope.authors[$stateParams.id];
}]);
