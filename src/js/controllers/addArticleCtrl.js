angular.module('Blog').controller('AddArticleCtrl', ['$scope', function($scope) {
    $scope.article = {
      title: 'sakjdn',
      body: 'Lorem sajknksancx',
      category: 'ascsac',
      date: 'sacasc'
    }
    $scope.category = [
      'Nature',
      'Science',
      'Health',
      'Wildlife',
      'Food',
      'History'
    ]
}]);
