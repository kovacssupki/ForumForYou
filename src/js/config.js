angular
    .module('Blog')
    .config([
        '$urlRouterProvider',
        '$stateProvider',

        function($urlRouterProvider,$stateProvider){
            $stateProvider
                .state('home',{
                    url: '/',
                    templateUrl:'views/home.html',
                    controller: 'homeCtrl'
                })
                .state('articles',{
                    url: '/articles',
                    templateUrl:'views/articles.html',
                    controller: 'articlesCtrl'
                })
                .state('viewArticle', {
                    url: '/articles/:id',
                    templateUrl: 'views/view-article.html',
                    controller: 'viewArticleCtrl'
                })
                .state('signup',{
                    url:'/signup',
                    templateUrl:'views/signup.html',
                    controller:'SignupController'
                })
                .state('about',{
                    url:'/about',
                    templateUrl:'views/about.html'
                })
                .state('admin',{
                    url:'/admin',
                    templateUrl:'views/admin.html'
                })
            $urlRouterProvider.otherwise("/");
        }
    ]);
