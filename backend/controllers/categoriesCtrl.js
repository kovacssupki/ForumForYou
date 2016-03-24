'use strict';

exports = module.exports = (Categories) => {
  return function*() {
  //  var categoriesObj = {};
    //categoriesObj.title = []; //array to hold the categories
    var categories = new Categories();
    var returnedCategories = yield categories.findCategories();
    // for (var i = 0; i < returnedCategories.length; i++) {
    //   categoriesObj.title.push(returnedCategories[i].title); //mongoose returns object array. frontend needs an array
    // }
         
    this.success(returnedCategories); //send array to frontend
  };
};

exports['singleton'] = true;
exports['@require'] = [
  'models/categories'
];
