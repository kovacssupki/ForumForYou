'use strict';
 var fs = require("co-fs");

exports = module.exports = ( Users ) => {
    return function* ( ) {
        var users = yield Users.find({}).exec();
        this.success(users);
    };
};

exports[ 'singleton' ] = true;
exports[ '@require' ] = [
    'models/user'
 ];
