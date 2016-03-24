'use strict';
angular
  .module('Blog')
  .service('PutRequest',['$http','$q', '$cookies',function($http,$q, $cookies) {

    this.put_data = function(url, data){
      var d = $q.defer();
      $http.put(url, data).then(function(response){
              d.resolve(response);
      }, function(error){
          d.reject(error);
      });
      return d.promise;
    };
}]);
