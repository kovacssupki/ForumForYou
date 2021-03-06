angular
  .module('Blog')
  .controller('homeCtrl', ['$scope','GetRequest',
  function($scope,GetRequest) {
      GetRequest.get_data('../src/data/articles.json').then(function(response){
          $scope.articles = response.data.articles;
          $scope.styles = response.data.styles;
          $scope.categories = response.data.categories;
          $scope.recentArticles = [];
          for (var i = 0; i < 3; i++) {
              $scope.recentArticles.push($scope.articles[i]);
          }
      });
}]);
