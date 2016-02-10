'use strict';
exports = module.exports = ( ) => {
    return function* ( ) {
        console.log('íntra aici');
        let msg = "Hello to Node JS";
        this.success(msg);
    };
};

exports[ 'singleton' ] = true;
//exports[ '@require' ] = [
//    'libs/error'
//];
