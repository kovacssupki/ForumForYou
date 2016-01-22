'use strict';

angular
    .module('Blog')
    .directive('dropDown', function() {
        return {
            restrict: 'AC',
            link: function(scope, elem, attr) {
                var slideSelector = angular.element(document).find('.dropdown-menu');
                elem.on('mouseover', function() {
                    slideSelector.stop(true).slideToggle(350);
                });
                elem.on('mouseout', function() {
                    slideSelector.stop(true).slideToggle(350);
                });
            }
        }
    });
