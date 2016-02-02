angular
  .module('Blog')
  .controller('articlesCtrl', ['$scope','GetRequest',
  function($scope,GetRequest) {

    GetRequest.get_data('../src/data/articles.json').then(function(resp){
      $scope.art = resp.data;
    });

}]);
