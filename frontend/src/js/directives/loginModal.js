'use strict';

angular
    .module('Blog')
    .directive('loginModal', function() {
        return {
           restrict: 'E',
           templateUrl:'views/directives/loginModal.html',
           link: function(scope, element, attr) {
           scope.dismiss = function() {
           element.modal('hide');
       };
     }

   };
});
