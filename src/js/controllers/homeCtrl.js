angular.module('Blog').controller('homeCtrl', ['$scope', function($scope) {
    $scope.recentArticles = [
        {
            title: 'Fun facts!',
            contentTrimmed: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor metus varius elementum venenatis...',
            id: 1
        },
        {
            title: 'Learning Angular JS',
            contentTrimmed: 'Nulla convallis justo est, eu lobortis arcu condimentum eu. In dignissim, erat eget bibendum dignissim, erat...',
            id: 2
        },
        {
            title: 'Another article...',
            contentTrimmed: 'Sed convallis mauris id elementum ultricies. Morbi vitae lorem nec metus semper iaculis. Phasellus id elit mi...',
            id: 3
        }
    ];
}]);