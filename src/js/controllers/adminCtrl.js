angular
  .module('Blog')
  .controller('AdminCtrl', ['$scope','DatePicker','Validate','AddArticle','Articles','Users',
  function($scope,DatePicker,Validate,AddArticle,Articles,Users) {

      $scope.datePicker = DatePicker;
      $scope.validate = Validate;
      $scope.addArt = AddArticle;
      $scope.art = Articles;
      $scope.users = Users;

      $scope.display = true;
      $scope.edit = function(){
        $scope.display = false;
      }
      $scope.save = function(){
        $scope.display = true;
      }
}]);
