'use strict';
var mongoose = require('mongoose'),
    timestamps = require('mongoose-timestamp'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

exports = module.exports = (settings) => {

    //create Schema
    var userSchema = new Schema({
      firstName: String,
      lastName: String,
      username: {type:String, required: true, unique: true},
      email: {type:String, required: true, unique: true},
      password: { type: String, required: true },
      description: String,
      quote: String,
      quoteAuthor: String,
      quoteSource: String,
      photo: String,
      messages: [{
        date:{type:Date},
        from:{type:String},
        body:{type:String}
      }]
    });

    //methods
    userSchema.methods.encrypt=function encrypt() {

    var md5 = crypto.createHash('md5');
    this.password = md5.update(this.password).digest('hex');
     //console.log(this.password);
   };

/*  userSchema.methods.verifyUniqueEmail = function (emailVar) {
     mongoose.models["User"].findOne({email : emailVar},function(err, results) {
  if(err) {
      return(err);
  } else  { //there was a result found, so the email address exists
      this.invalidate("email","email must be unique");
      return(new Error("email must be unique"));
  }
});
   };

   userSchema.methods.verifyUniqueUsername = function (usernameVar) {
     mongoose.models["User"].findOne({username : usernameVar},function(err, results) {
  if(err) {
      done(err);
  } else  { //there was a result found, so the email address exists
      this.invalidate("username","username must be unique");
      return(new Error("username must be unique"));
  }
});
   }; */

    userSchema.plugin(timestamps);
    //create model using Schema
    return mongoose.model('User',userSchema, 'User');
  }

  exports['@singleton'] = true;
  exports['@require'] = ['library/settings'];
