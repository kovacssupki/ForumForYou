'use strict';

angular
    .module('Blog')
    .directive('articleHome', function() {
        return {
            restrict: 'E',
            templateUrl:'views/directives/articleHome.html'
        };
    });
