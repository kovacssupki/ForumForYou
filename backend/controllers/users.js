'use strict';
 var fs = require("co-fs");

exports = module.exports = ( ) => {
    return function* ( ) {

        var users = JSON.parse(yield fs.readFile('models/users.json', 'utf8'));
        this.success(
          {
          users:users
          }
        );
    };
};

exports[ 'singleton' ] = true;
// exports[ '@require' ] = [
//    'node_modules/co-fs'
// ];
