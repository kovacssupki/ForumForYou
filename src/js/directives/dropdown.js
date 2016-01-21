'use strict';

angular
    .module('Blog')
    .directive('dropDown', function() {
        return {
            restrict: 'AC',
            link: function(scope, elem, attr) {
                var slideSelector = angular.element('.' + attr.dropDown);

                elem.bind('mouseover', function() {
                    slideSelector.stop(true).slideToggle(350);
                });

                elem.bind('mouseout', function() {
                    slideSelector.stop(true).slideToggle(350);
                });
            }
        }
    });