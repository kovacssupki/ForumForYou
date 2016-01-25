'use strict';

angular
    .module('Blog')
    .directive('loginModal', function() {
        return {
           restrict: 'E',
           templateUrl:'views/directives/loginModal.html'
   };
});
