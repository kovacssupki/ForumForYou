'use strict';
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  co = require('co'),

  Schema = mongoose.Schema;

exports = module.exports = (settings) => {

  //create Schema
  var articleSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    authorPage: String,
    thumbnail: String,
    image: { data: Buffer, contentType: String },
    content: String,
    contentTrimmed: String,
    categories: [{
      type: Schema.Types.ObjectId,
      ref: 'Categories'
    }]
  });

  // articleSchema.methods.setCookie = function setCookie() {};
  //
  // articleSchema.methods.checkCookie = co.wrap(function* checkCookie(sentCookie) {
  //   var dbUser = yield mongoose.models["Article"].findOne({
  //     currentCookie: sentCookie
  //   });
  //   return dbUser;
  // });
  //
  //
  // articleSchema.pre('save', function(next) {
  //   var self = this;
  //   mongoose.models["Article"].findOne({
  //     email: new RegExp('^' + self.email + '$', "i")
  //   }, function(err, results) { //regular expression for case insensitive match
  //
  //     if (err) {
  //       next(err);
  //     } else if (results) { //there was a result found, so the email address exists
  //       self.invalidate("email", "email must be unique2");
  //       next(new Error("email must be unique"));
  //     } else {
  //       next()
  //     }
  //   });
  // });


  articleSchema.plugin(timestamps);
  //create model using Schema
  return mongoose.model('Article', articleSchema, 'Article');
}

exports['@singleton'] = true;
exports['@require'] = ['library/settings'];
