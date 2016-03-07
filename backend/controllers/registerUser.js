'use strict';

exports = module.exports = (User) => {
    return function* ( ) {

      var user = new User(this.request.body);
      user.encrypt();
      var logUser = yield  user.save();
      console.log("logUser:" + logUser);

        let msg = "Hello to Node JS";
        this.success(user);
    };
};

exports[ 'singleton' ] = true;
exports[ '@require' ] = [
'models/user'
 ];
