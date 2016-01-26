angular
.module('Blog')
.controller('AdminCtrl', [
  '$scope',
  'DatePicker',
  function($scope,DatePicker) {

    $scope.required = function(form){
       if(form.$error.required && form.$dirty){
          return true;
       }
    };
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

    $scope.article = {
      title: 'Animals',
      body: 'Lorem Lorem Lorem ',
      category: ['Nature','Science'],
      date: '25.01.2016'
    };

    $scope.categories = [
      'Nature',
      'Science',
      'Health',
      'Wildlife',
      'Food',
      'History',
      'Technology',
      'Music'
    ]
}]);
