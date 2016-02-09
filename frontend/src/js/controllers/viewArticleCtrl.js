angular
  .module('Blog')
  .controller('viewArticleCtrl', ['$scope','$stateParams', 'GetRequest',
    function($scope, $stateParams, GetRequest) {
        GetRequest.get_data('../src/data/full-articles.json').then(function(response){
            $scope.articles = response.data;

            $scope.article = $scope.articles[$stateParams.id];

            $scope.checkDisableLeft = function(id) {
                return id < 2;
            };

            $scope.checkDisableRight = function(id) {
                return id >= Object.keys($scope.articles).length;
            };
            $scope.addComment = function(newComment) {
                $scope.article.comments.push(newComment);
            };
            $scope.addReply = function(newReply) {
                if (!$scope.article.comments.replies) $scope.article.comments.replies = [];
                $scope.article.comments.replies.push(newReply);
            };
        });
}]);
