angular
.module('Blog')
.controller('AdminCtrl', [
  '$scope',
  'DatePicker',
  'Validate',
  'AddArticle',
  function($scope,DatePicker,Validate,AddArticle) {

    $scope.validate = Validate;
    $scope.addArt = AddArticle;
    $scope.datePicker = DatePicker;
  
    $scope.users = [
        {
            id: 1,
            firstName: 'Stefan',
            lastName: 'Chira',
            username: 'stefan.chira',
            email: 'stefan.chira@yahoo.com'

        },
        {
            id: 2,
            firstName: 'Stanca',
            lastName: 'Pop',
            username: 'stanca.pop',
            email: 'stanca.pop@yahoo.com'
        },
        {
            id: 3,
            firstName: 'Some',
            lastName: 'Name',
            username: 'some.name',
            email: 'some.name@yahoo.com'
        }
    ];

}]);
