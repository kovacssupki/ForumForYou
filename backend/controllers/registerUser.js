'use strict';
exports = module.exports = (User) => {
    return function* ( ) {
      var user = yield new User(this.request.body).save();

      console.log(user);
    //  User.save(user);

        let msg = "Hello to Node JS";
        this.success(user);
    };
};

exports[ 'singleton' ] = true;
exports[ '@require' ] = [
'models/user'
 ];
