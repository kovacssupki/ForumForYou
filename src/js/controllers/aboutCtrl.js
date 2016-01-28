angular
  .module('Blog')
  .controller('aboutCtrl', ['$scope','Users',
  function($scope,Users) {
      $scope.authors = Users;
}]);
