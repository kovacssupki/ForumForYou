angular
  .module('Blog')
  .controller('articlesCtrl', ['$scope','GetRequest',
  function($scope,GetRequest) {

    GetRequest.get_data('../src/data/articles.json').then(function(response){
      $scope.articles = response.data.articles;
      $scope.styles = response.data.styles;
      $scope.categories = response.data.categories;
    });

}]);
