angular
  .module('Blog')
  .controller('homeCtrl', ['$scope','Articles',
  function($scope,Articles) {
    $scope.art = Articles;
}]);
