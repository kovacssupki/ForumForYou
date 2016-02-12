'use strict';
 var fs = require("co-fs");

exports = module.exports = ( ) => {
    return function* ( artId ) {

        var articles = JSON.parse(yield fs.readFile('models/articles.json', 'utf8')).articles;
        var article = {};
        // for(let ch of this.url){
        //   console.log(ch);
        // }
        var artId = [...this.url][this.url.length-1];// modify url string into array and find last element
        // console.log(artId);
        // console.log(articles[2].id);

        for(var i=0; i<articles.length; i++){
          if(articles[i].id === +artId){
            var article = articles[i];
            console.log(articles[i]);
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
