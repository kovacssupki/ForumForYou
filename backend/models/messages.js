
'use strict';
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  co = require('co'),

  Schema = mongoose.Schema;

exports = module.exports = (settings) => {

  //create Schema
  var messagesSchema = new Schema({
    from: {type: Schema.Types.ObjectId,
    ref: 'User'
    },
    body: {
      type: String
    }
  });


   messagesSchema.methods.findMessages = co.wrap(function* findMessages() {
    var dbCategory = yield mongoose.models["Messages"].find({});
    //console.log(dbCategory);
    return dbCategory;
  });


 messagesSchema.plugin(timestamps);
  //create model using Schema
  return mongoose.model('Messages',  messagesSchema, 'Messages');
}

exports['@singleton'] = true;
exports['@require'] = ['library/settings'];
