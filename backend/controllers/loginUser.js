'use strict';


exports = module.exports = (User) => {
  return function*() {
    var user = new User(this.request.body);
    user.encrypt(); //encrypt the password

    var loginVar = yield user.login();
    if (loginVar) {
      if (user.password === loginVar.password) {
        var encryptCookie = user.setCookie();
        var expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + 30 * 60 * 1000); //cookie expires in 30 minutes
        user.saveCookie(encryptCookie); //save current cookie in DB
        this.cookies.set("LoginCookie", encryptCookie, {
          expires: expireDate
        });

        this.success();

      } else {
        this.status = 401;
        this.body = {
          status: "error",
          data: 'Password is not correct'
        };
      }

    } else {
      this.status = 401;
      this.body = {
        status: "error",
        data: 'Username does not exist'
      };
    }
  };
};

exports['singleton'] = true;
exports['@require'] = [
  'models/user'
];
