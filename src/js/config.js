angular
    .module('Blog')
    //.config(function($breadcrumbProvider) {
    //   $breadcrumbProvider.setOptions({
    //     prefixStateName: 'home',
    //     templateUrl: 'views/home.html'
    //   });
    // })
    .config([
        '$urlRouterProvider',
        '$stateProvider',

        function($urlRouterProvider,$stateProvider){
            $stateProvider
                .state('home',{
                    url: '/',
                    templateUrl:'views/home.html',
                    controller: 'homeCtrl',
                    ncyBreadcrumb: {
                      label: 'Home'
                    }
                })
                .state('articles',{
                    url: '/articles',
                    templateUrl:'views/articles.html',
                    controller: 'articlesCtrl',
                    ncyBreadcrumb: {
                      label: 'Articles'
                    }
                })
                .state('viewCategory',{
                    url: '/articles/category/:category',
                    templateUrl:'views/view-category.html',
                    controller: 'viewCategoryCtrl'
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
                    templateUrl:'views/about.html',
                    controller: 'aboutCtrl'
                })
                .state('viewAuthor',{
                    url:'/about/:id',
                    templateUrl:'views/view-author.html',
                    controller: 'viewAuthorCtrl'
                })
                .state('admin',{
                    url:'/admin',
                    templateUrl:'views/admin.html',
                    controller:'AdminCtrl'
                });
            $urlRouterProvider.otherwise("/");
        }
    ]);
