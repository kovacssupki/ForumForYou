angular
  .module('Blog')
  .controller('viewCategoryCtrl', ['$scope','$stateParams',
      function($scope, $stateParams) {

          $scope.categories = {
              nature: [
                  {
                      title: 'Fun facts!',
                      id: 6
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      id: 4
                  },
                  {
                      title: 'The Organic Effect...',
                      id: 2
                  }
              ],

              wildlife: [
                  {
                      title: 'Fun facts!',
                      id: 6
                  }
              ],

              science: [
                  {
                      title: 'Fun facts!',
                      id: 6
                  },
                  {
                      title: 'Learning Angular JS',
                      id: 5
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      id: 4
                  },
                  {
                      title: 'Android 6 Vs. iOS 9: The Showdown',
                      id: 3
                  }
              ],

              technology: [
                  {
                      title: 'Fun facts!',
                      id: 6
                  },
                  {
                      title: 'Learning Angular JS',
                      id: 5
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      id: 4
                  },
                  {
                      title: 'Android 6 Vs. iOS 9: The Showdown',
                      id: 3
                  },
                  {
                      title: 'Breaking news about Facebook!',
                      id: 1
                  }
              ],

              health: [
                  {
                      title: 'Fun facts!',
                      id: 6
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      id: 4
                  },
                  {
                      title: 'The Organic Effect...',
                      id: 2
                  }
              ],

              food: [
                  {
                      title: 'Fun facts!',
                      id: 6
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      id: 4
                  },
                  {
                      title: 'The Organic Effect...',
                      id: 2
                  }
              ],

              history: [
                  {
                      title: 'Fun facts!',
                      id: 6
                  },
                  {
                      title: '100 Good Books to Read: Book Recommendations',
                      id: 4
                  }
              ],

              music: [
                  {
                      title: 'Fun facts!',
                      id: 6
                  }
              ]
          };
          $scope.category = $scope.categories[$stateParams.category];
}]);
