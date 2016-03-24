'use strict';

exports = module.exports = (User) => {
    return function* ( ) {

      var user = new User(this.request.body);
      user.encrypt();
      var logUser = yield  user.save();  
        this.success(user);
    };
};

exports[ 'singleton' ] = true;
exports[ '@require' ] = [
'models/user'
 ];
