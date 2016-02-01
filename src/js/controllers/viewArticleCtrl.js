angular
  .module('Blog')
  .controller('viewArticleCtrl', ['$scope','$stateParams', 'GetRequest',
    function($scope, $stateParams, GetRequest) {
        GetRequest.get_data('../src/data/articles.json').then(function(response){
            $scope.articles = response.data.articles;
            $scope.article = $scope.articles[$stateParams.id-1];
            $scope.checkDisableLeft = function(id) {
                return id < 2;

            };

            $scope.checkDisableRight = function(id) {
                return id >= $scope.articles.length;
            }
        });
}]);

