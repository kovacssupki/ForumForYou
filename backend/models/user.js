'use strict';
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  crypto = require('crypto'),
  co = require('co'),
  Schema = mongoose.Schema;

exports = module.exports = (settings) => {

  //create Schema
  var userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    description: String,
    currentCookie: String,
    quote : String,
    quoteAuthor: String,
    quoteSource: String,
    photo: String,
    messages: [{
      date: {
        type: Date
      },
      from: {
        type: String
      },
      body: {
        type: String
      }
    }]
  });



  userSchema.methods.encrypt = function encrypt() {
    var md5 = crypto.createHash('md5');
    this.password = md5.update(this.password).digest('hex');
  };

  userSchema.methods.setCookie = function setCookie() {
    var md5 = crypto.createHash('md5');
    var salt = process.env.SALT;
    var timestamp = Date.now();
    var cookie = timestamp + this.username + this.password + salt;
    var encryptCookie = md5.update(cookie).digest('hex');
    return encryptCookie;
  };

  userSchema.methods.saveCookie = function saveCookie(encryptCookie) {
      var self = this;
    mongoose.models["User"].findOne({username: this.username}, function(err, dbUser) {
      if (dbUser) {
        dbUser.currentCookie = encryptCookie;
        mongoose.models["User"].findOneAndUpdate({username: self.username}, {currentCookie: encryptCookie}, function(err, updatedObject) {}); //save cookie in database

      return dbUser;
      }
      if(err)
      { console.log("err");}

    });
  }


  userSchema.methods.checkCookie = co.wrap(function* checkCookie(sentCookie) {
    var dbUser = yield mongoose.models["User"].findOne({
      currentCookie: sentCookie
    });
    return dbUser;
  });


  userSchema.methods.login= co.wrap(function* login() {
    var resultsVar = yield mongoose.models["User"].findOne({
      username: this.username
    });
    return resultsVar;
  });



  userSchema.pre('save', function(next) {
    var self = this;
    mongoose.models["User"].findOne({
      email: new RegExp('^' + self.email + '$', "i")
    }, function(err, results) { //regular expression for case insensitive match

      if (err) {
        next(err);
      } else if (results) { //there was a result found, so the email address exists
        self.invalidate("email", "email must be unique2");
        next(new Error("email must be unique"));
      } else {
        next()
      }
    });
  });

  userSchema.pre('save', function(next) {
    var self = this;
    mongoose.models["User"].findOne({
      username: new RegExp('^' + self.username + '$', "i")
    }, function(err, results) { //regular expression for case insensitive match
      if (err) {
        next(err);
      } else if (results) { //there was a result found, so the username exists
        self.invalidate("username", "username must be unique2");
        next(new Error("username must be unique"));
      } else {
        next()
      }
    });
  });



  userSchema.plugin(timestamps);
  //create model using Schema
  return mongoose.model('User', userSchema, 'User');
}

exports['@singleton'] = true;
exports['@require'] = ['library/settings'];
