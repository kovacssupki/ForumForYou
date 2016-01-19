angular.module('Blog')
    .directive('footer',function(){
        return{
            restrict:'E',
            templateUrl:'views/directives/footer.html'
        }
    });