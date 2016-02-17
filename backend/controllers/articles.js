'use strict';
 var fs = require("co-fs");

exports = module.exports = ( ) => {
    return function* ( ) {
        var articles = JSON.parse(yield fs.readFile('models/articles.json', 'utf8')).articles;
        this.success(
          {
          articles:articles,
          }
        );
    };
};

exports[ 'singleton' ] = true;
// exports[ '@require' ] = [
//    'node_modules/co-fs'
// ];
