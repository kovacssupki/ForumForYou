angular
  .module('Blog')
  .controller('viewAuthorCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {
      $scope.authors = {
          stefan: {
              firstName: 'Stefan',
              lastName: 'Chira',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              quote: 'We are all apprentices in a craft where no one ever becomes a master.',
              quoteAuthor: 'Ernest Hemingway',
              quoteSource: 'The Wild Years',
              email: 'stefan.chira@fortech.ro',
              id: 'stefan'
          },
          stanca: {
              firstName: 'Stanca',
              lastName: 'Pop',
              quote: 'No one can make you feel inferior without your consent.',
              quoteAuthor: 'Eleanor Roosevelt',
              quoteSource: 'This is My Story',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              email: 'stanca.pop@fortech.ro',
              id: 'stanca'
          }
      };
      $scope.author = $scope.authors[$stateParams.id];
}]);
