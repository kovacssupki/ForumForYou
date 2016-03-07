'use strict';

exports = module.exports = (User) => {
    return function* () {
      var user = new User(this.request.body);
      user.encrypt(); //encrypt the password

    var loginVar = yield user.login();

      if(loginVar)
      {
        if(user.password === loginVar.password)
        {
              this.success(loginVar);
        }
        else {
          this.status = 401;
          this.body = {status: "error", data: 'Password is not correct' };

        }

    }
 else {
   this.status = 401;
   this.body = {status: "error", data: 'Username does not exist' };

    }


    };
};

exports[ 'singleton' ] = true;
exports[ '@require' ] = [
'models/user'
 ];
