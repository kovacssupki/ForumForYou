angular
  .module('Blog')
  .controller('viewCategoryCtrl', ['$scope','$stateParams',
      function($scope, $stateParams) {

          $scope.categories = {
              nature: [
                  {
                      title: 'Fun facts!',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '20/01/2016',
                      id: 6
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '16/09/2015',

                      id: 4
                  },
                  {
                      title: 'The Organic Effect...',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '18/04/2015',
                      id: 2
                  }
              ],

              wildlife: [
                  {
                      title: 'Fun facts!',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '20/01/2016',
                      id: 6
                  }
              ],

              science: [
                  {
                      title: 'Fun facts!',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '20/01/2016',
                      id: 6
                  },
                  {
                      title: 'Learning Angular JS',
                      author: 'Stefan Chira',
                      authorPage: 'stefan',
                      date: '02/12/2015',
                      id: 5
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '16/09/2015',
                      id: 4
                  },
                  {
                      title: 'Android 6 Vs. iOS 9: The Showdown',
                      author: 'Stefan Chira',
                      authorPage: 'stefan',
                      date: '08/08/2015',
                      id: 3
                  }
              ],

              technology: [
                  {
                      title: 'Fun facts!',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '20/01/2016',
                      id: 6
                  },
                  {
                      title: 'Learning Angular JS',
                      author: 'Stefan Chira',
                      authorPage: 'stefan',
                      date: '02/12/2015',
                      id: 5
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '16/09/2015',
                      id: 4
                  },
                  {
                      title: 'Android 6 Vs. iOS 9: The Showdown',
                      author: 'Stefan Chira',
                      authorPage: 'stefan',
                      date: '08/08/2015',
                      id: 3
                  },
                  {
                      title: 'Breaking news about Facebook!',
                      author: 'Stefan Chira',
                      authorPage: 'stefan',
                      date: '30/06/2014',
                      id: 1
                  }
              ],

              health: [
                  {
                      title: 'Fun facts!',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '20/01/2016',
                      id: 6
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '16/09/2015',
                      id: 4
                  },
                  {
                      title: 'The Organic Effect...',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '18/04/2015',
                      id: 2
                  }
              ],

              food: [
                  {
                      title: 'Fun facts!',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '20/01/2016',
                      id: 6
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '16/09/2015',
                      id: 4
                  },
                  {
                      title: 'The Organic Effect...',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '18/04/2015',
                      id: 2
                  }
              ],

              history: [
                  {
                      title: 'Fun facts!',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '20/01/2016',
                      id: 6
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '16/09/2015',
                      id: 4
                  }
              ],

              music: [
                  {
                      title: 'Fun facts!',
                      author: 'Stanca Pop',
                      authorPage: 'stanca',
                      date: '20/01/2016',
                      id: 6
                  }
              ]
          };
          $scope.category = $scope.categories[$stateParams.category];
}]);
