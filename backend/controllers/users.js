'use strict';


exports = module.exports = ( User ) => {
    return function* ( ) {
      var requestCookie = this.cookies.get('LoginCookie');
        var allUsers = yield User.find({});
        var currentUser = yield User.findOne({currentCookie: requestCookie});
        var users = {allUsers, currentUser}
        console.log(users);
        this.success(users);
    };
};

exports[ 'singleton' ] = true;
exports[ '@require' ] = [
    'models/user'
 ];
