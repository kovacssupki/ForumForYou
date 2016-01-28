angular
  .module('Blog')
  .controller('articlesCtrl', ['$scope','Articles',
  function($scope,Articles) {
    $scope.art = Articles;
}]);
