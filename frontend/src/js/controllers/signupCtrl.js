angular
  .module('Blog')
  .controller('SignupController',['$scope','DatePicker','Validate',
  function($scope,DatePicker,Validate) {

       $scope.datePicker = DatePicker;
       $scope.validate = Validate;
       $scope.user = {};

       $scope.signup = function() {
         GetRequest.get_data('../src/data/articles.json').then(function(response){
             $scope.articles = response.data.articles;
             $scope.styles = response.data.styles;
             $scope.categories = response.data.categories;
             $scope.recentArticles = [];
             for (var i = 0; i < 3; i++) {
                 $scope.recentArticles.push($scope.articles[i]);
             }
         });
       };

}]);
