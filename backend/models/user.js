'use strict';
var mongoose = require('mongoose'),
    timestamps = require('mongoose-timestamp'),
    Schema = mongoose.Schema;

exports = module.exports = (settings) => {

    //create Schema
    var userSchema = new Schema({
      firstName: String,
      lastName: String,
      username: {type:String, required: true, unique: true},
      email: {type:String, required: true, unique: true},
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

    userSchema.plugin(timestamps);
    //create model using Schema
    return mongoose.model('User',userSchema);
  }

  exports['@singleton'] = true;
  exports['@require'] = ['library/settings'];
