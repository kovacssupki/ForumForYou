'use strict';
 var fs = require("co-fs");

exports = module.exports = (  ) => {
    return function* ( userId ) {

        var users = JSON.parse(yield fs.readFile('models/users.json', 'utf8'));
        var user = {};

        for(var i=0; i<users.length; i++){
          if(users[i].id === userId){
            var user = users[i];
          }
        }
        this.success(
          {
          userDetails:user
          }
        );
    };
};

exports[ 'singleton' ] = true;
// exports[ '@require' ] = [
//    'node_modules/co-fs'
// ];
