'use strict';

exports = module.exports = (User) => {
    return function* ( ) {

      var user = new User(this.request.body);
      user.encrypt();
    //  user.verifyUniqueUsername(this.request.body.username);
    //  user.verifyUniqueEmail(this.request.body.email);
      yield  user.save();



      yield user.save();



        let msg = "Hello to Node JS";
        this.success(user);
    };
};

exports[ 'singleton' ] = true;
exports[ '@require' ] = [
'models/user'
 ];
