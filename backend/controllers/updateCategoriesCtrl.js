'use strict';

exports = module.exports = (Categories) => {
    return function* ( ) {

      var categories = new Categories();
    var returnedCategories =   yield categories.findCategories();

    //  console.log(categories)
      //var logUser = yield  user.save();
        this.success(returnedCategories);
    };
};

exports[ 'singleton' ] = true;
exports[ '@require' ] = [
'models/categories'
 ];
