'use strict';

exports = module.exports = ( Article, User) => {
    return function* ( ) {
      var requestCookie = this.cookies.get('LoginCookie');

        var currentUser = yield User.findOne({currentCookie: requestCookie});

      var allArticles = yield Article.find({author: currentUser._id });
      //var currentUser = yield User.findOne({currentCookie: requestCookie});
    //  var users = {allUsers, currentUser}
      console.log(allArticles);
      this.success(allArticles);
    };
};

exports[ 'singleton' ] = true;
exports['@require'] = [
  'models/article',
  'models/user'
];
