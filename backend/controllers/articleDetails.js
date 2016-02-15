'use strict';
 var fs = require("co-fs");

exports = module.exports = (  ) => {
    return function* ( artId ) {

        var articles = JSON.parse(yield fs.readFile('models/articles.json', 'utf8')).articles;
        var article = {};

        for(var i=0; i<articles.length; i++){
          if(articles[i].id === +artId){
            var article = articles[i];
          }
        }
        this.success(
          {
          articleDetails:article
          }
        );
    };
};

exports[ 'singleton' ] = true;
// exports[ '@require' ] = [
//    'node_modules/co-fs'
// ];
