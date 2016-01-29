angular
    .module('Blog')
    .controller('homeCtrl', ['$scope',
      function($scope) {
        $scope.recentArticles = [
          {
            title: 'Fun facts!',
            author: 'Stanca Pop',
            authorPage: 'stanca',
            date: '20/01/2016',
            image: 'assets/images/article-fun.png',
            contentTrimmed: 'Lorem ipsum dolor sit amet, posuere ultrices, ullamcorper vel enim. Ut felis turpis, sodales a sapien ut, ornare porttitor nibh. Vestibulum vel est laoreet, maximus ante eget, consequat ante. Aenean vestibulum nibh eget euismod vulputate. Aliquam erat volutpat. Sed imperdiet malesuada posuere. Morbi posuere risus...',
            categories: ['nature', 'wildlife', 'science', 'technology', 'health', 'food', 'history', 'music'],
            id: 6
          },
          {
            title: 'Learning Angular JS',
            author: 'Stefan Chira',
            authorPage: 'stefan',
            date: '02/12/2015',
            image: 'assets/images/article-angular.png',
            contentTrimmed: 'Nulla convallis justo est, eu lobortis arcu condimentum eu. In dignissim, erat eros iaculis purus, quis aliquam nisi elit id purus. Duis vehicula sed ligula ac dictum. Sed quis arcu consectetur, posuere lorem eget, ultrices enim. Vestibulum auctor bibendum leo in hendrerit. Maecenas euismod magna massa...',
            categories: ['science', 'technology'],
            id: 5
          },
          {
            title: '100 Good Books to Read: Book Recommendations',
            author: 'Stanca Pop',
            authorPage: 'stanca',
            date: '16/09/2015',
            image: 'assets/images/article-book.png',
            contentTrimmed: 'Nunc ac purus sed tellus consequat iaculis eget eleifend ex. Suspendisse vitae euismod urna. Nam vitae gravida metus. Maecenas dignissim sit amet nibh ac ultrices. Sed sodales mi nec vehicula dapibus. Fusce accumsan ante sed lacus lacinia, vitae mollis ipsum suscipit. Praesent ornare ultrices quam, laoreet...',
            categories: ['nature', 'science', 'technology', 'health', 'food', 'history'],
            id: 4
          }
        ];
        $scope.styles = ['default', 'danger', 'info'];
        $scope.categories = ['nature', 'wildlife', 'science', 'technology', 'health', 'food', 'history', 'music']
      }]);
