angular
  .module('Blog')
  .controller('articlesCtrl', ['$scope','GetRequest',
  function($scope,GetRequest) {

    GetRequest.get_data('http://localhost/PROJECTS/github/ForumForYou/src/data/articles.json').then(function(resp){
      $scope.art = resp.data;
    });

}]);
