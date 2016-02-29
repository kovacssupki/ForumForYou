'use strict';
angular
  .module('Blog')
  .service('PostRequest',['$http','$q',function($http,$q) {

    this.post_data = function(url, data){
      var d = $q.defer();
      $http.post(url, data).then(function(response){
        d.resolve(response);
      });
      return d.promise;
    };
}]);
