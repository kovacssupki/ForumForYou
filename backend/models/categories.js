'use strict';
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  co = require('co'),

  Schema = mongoose.Schema;

exports = module.exports = (settings) => {

  //create Schema
  var categoriesSchema = new Schema({
  title: {
    type: String,
    required: true
  }
  });


  categoriesSchema.methods.findCategories = co.wrap(function* findCategories() {
    var dbCategory = yield mongoose.models["Categories"].find({});
    //console.log(dbCategory);
    return dbCategory;
  });


  categoriesSchema.plugin(timestamps);
  //create model using Schema
  return mongoose.model('Categories', categoriesSchema, 'Categories');
}

exports['@singleton'] = true;
exports['@require'] = ['library/settings'];
