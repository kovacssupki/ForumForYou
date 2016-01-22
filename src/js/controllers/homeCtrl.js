angular.module('Blog').controller('homeCtrl', ['$scope', function($scope) {
    $scope.recentArticles = [
        {
            title: 'Fun facts!',
            contentTrimmed: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor metus varius elementum venenatis. Vivamus id sodales magna. Ut turpis urna, blandit sit amet posuere ultrices, ullamcorper vel enim...',
            id: 6
        },
        {
            title: 'Learning Angular JS',
            contentTrimmed: 'Nulla convallis justo est, eu lobortis arcu condimentum eu. In dignissim, erat eget bibendum dignissim, erat eros iaculis purus, quis aliquam nisi elit id purus. Duis vehicula sed ligula ac dictum...',
            id: 5
        },
        {
            title: '100 Good Books to Read: Book Recommendations',
            contentTrimmed: 'Nunc ac purus sed tellus consequat iaculis eget eleifend ex. Suspendisse vitae euismod urna. Nam vitae gravida metus. Maecenas dignissim sit amet nibh ac ultrices. Sed sodales mi nec vehicula dapibus...',
            id: 4
        }
    ];
    $scope.styles = {
        0 : 'default',
        1 : 'danger',
        2 : 'info'
    };
}]);