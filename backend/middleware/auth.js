'use strict';
var unless = require('koa-unless'),
  mongoose = require('mongoose'),
  co = require('co');
exports = module.exports = (User) => {
  return function*(next) {

      var requestCookie = this.cookies.get('LoginCookie');
      if (requestCookie) {
        var dbUser = yield mongoose.models["User"].findOne({
          currentCookie: requestCookie
        });

        if (dbUser) {
          var dbCookie = dbUser.currentCookie;
          if(dbCookie === requestCookie)
          {
            yield next;
          }
          else {
            this.fail(401, "Session expired");
        
        }

        } else {
        this.fail(403, "Wrong username or password");

        }
      } else {
        this.fail(401, "Access denied");


      }




  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'models/user'
];
