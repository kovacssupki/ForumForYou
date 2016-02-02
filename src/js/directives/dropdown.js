'use strict';

angular
    .module('Blog')
    .directive('dropDown', function($window) {
        return {
            restrict: 'AC',
            link: function(scope, elem, attr) {
                var slideSelector = angular.element(document).find('.dropdown-menu');
                elem.on('mouseover mouseout', function() {
                    slideSelector.stop(true).slideToggle(350);
                });

                // var w = angular.element($window);
                // w.bind('resize', function () {
                //   scope.$apply(update);
                // });
                // update();
                //
                // function update(){
                //   var width = w.width();
                //   console.log(width);
                //
                //   if(width <= 750){
                //     elem.on('click', function() {
                //         slideSelector.stop(true).slideToggle(350);
                //     });
                //   }
                //   else{
                //     elem.on('mouseover mouseout', function() {
                //         slideSelector.stop(true).slideToggle(350);
                //     });
                //   }
                // }
            }
        }
    });
