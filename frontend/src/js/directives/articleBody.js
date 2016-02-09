'use strict';

angular
  .module('Blog')
  .directive('articleBody', function() {
    return {
       restrict: 'E',
       templateUrl:'views/directives/articleBody.html'
    };
});
