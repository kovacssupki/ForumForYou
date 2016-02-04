angular
  .module('Blog')
  .controller('viewAuthorCtrl', ['$scope', '$stateParams','GetRequest',
  function($scope, $stateParams,GetRequest) {

      GetRequest.get_data('../src/data/users.json').then(function(response){
        $scope.users = response.data;

      GetRequest.get_data('../src/data/articles.json').then(function(response){
        $scope.articles = response.data.articles;

          for (var i = 0; i < $scope.users.length; i++){
            if($scope.users[i].id === $stateParams.id){
              $scope.author = $scope.users[i];
            }
          }
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.slides = [];

        for (var i = 0; i < $scope.articles.length; i++) {
          if ($scope.articles[i].authorPage === $stateParams.id) {
            $scope.slides.push({
              image: $scope.articles[i].image,
              text: $scope.articles[i].title
            });
          }
        }
        console.log($scope.slides);
      });
    });
}]);


