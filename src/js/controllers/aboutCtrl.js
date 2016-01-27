angular
  .module('Blog')
  .controller('aboutCtrl', ['$scope',
  function($scope) {

      $scope.authors = [
          {
              firstName: 'Stefan',
              lastName: 'Chira',
              photo: 'assets/images/stefan.jpg',
              id: 'stefan'
          },
          {
              firstName: 'Stanca',
              lastName: 'Pop',
              photo: 'assets/images/stanca.jpg',
              id: 'stanca'
          }
      ];
}]);
