angular
  .module('Blog')
  .controller('viewAuthorCtrl', ['$scope', '$stateParams','GetRequest',
  function($scope, $stateParams,GetRequest) {

      GetRequest.get_data('../src/data/users.json').then(function(resp){
        $scope.users = resp.data;

        console.log($scope.users);
        GetRequest.get_data('../src/data/articles.json').then(function(resp){

          $scope.art = resp.data;

          for (var i = 0; i < $scope.users.length; i++){
            if($scope.users[i].id === $stateParams.id){
              $scope.author = $scope.users[i];
            }
          }
      });
    });
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];

    $scope.addSlide = function() {
      slides.push({
        image: ["assets/images/fun.jpg", "assets/images/book.jpg", "assets/images/bio.jpg", "assets/images/angular.jpg", "assets/images/android.jpg", "assets/images/facebook.jpg"][slides.length % 6],
        text: ["Fun facts!", "100 Good Books to Read: Book Recommendations", "The Organic Effect...", "Learning Angular JS", "Android 6 Vs. iOS 9: The Showdown", "Breaking news about Facebook!"][slides.length % 6]
      });
    };

    for (var i = 0; i < 6; i++) {
      $scope.addSlide();
    }
}]);

