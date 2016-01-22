angular.module('Blog').controller('homeCtrl', ['$scope', function($scope) {
    $scope.recentArticles = [
        {
            title: 'Fun facts!',
            author: 'Stanca Pop',
            authorPage: '#/about',
            date: '20/01/2016',
            image: 'assets/images/article-fun.png',
            contentTrimmed: 'Lorem ipsum dolor sit amet, posuere ultrices, ullamcorper vel enim. Ut felis turpis eget euismod vulputate. Sed imperdiet malesuada posuere. Morbi posuere risus at massa egestas, accumsan, ipsum eget rutrum tincidunt, mauris felis interdum velit, eu cursus sem dui vel justo...',
            id: 6
        },
        {
            title: 'Learning Angular JS',
            author: 'Stefan Chira',
            authorPage: '#/about',
            date: '02/12/2015',
            image: 'assets/images/article-angular.png',
            contentTrimmed: 'Nulla convallis justo est, eu lobortis arcu condimentum eu. Duis vehicula sed ligula ac dictum. Sed quis arcu consectetur ultrices enim. Vestibulum auctor bibendum leo in hendrerit. Maecenas euismod magna massa, eu laoreet urna luctus ut. Maecenas dui tortor, bibendum sit amet urna eu, rhoncus tempor massa...',
            id: 5
        },
        {
            title: '100 Good Books to Read: Book Recommendations',
            author: 'Stanca Pop',
            authorPage: '#/about',
            date: '16/09/2015',
            image: 'assets/images/article-book.png',
            contentTrimmed: 'Nunc ac purus sed tellus consequat iaculis eget eleifend ex. Sed sodales mi nec vehicula dapibus. Praesent ornare ultrices quam, laoreet, dolor in blandit sodales, elit dolor tincidunt lacus, interdum odio a, accumsan dolor. Cras volutpat nec erat venenatis rhoncus...',
            id: 4
        }
    ];
    $scope.styles = {
        0 : 'default',
        1 : 'danger',
        2 : 'info'
    };
}]);