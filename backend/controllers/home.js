'use strict';
exports = module.exports = ( ) => {
    return function* ( ) {
        let msg = "Hello to Node JS";
        this.success(msg);
    };
};

exports[ 'singleton' ] = true;
//exports[ '@require' ] = [
//    'libs/error'
//];
