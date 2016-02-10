'use strict';

exports = module.exports = ( ) => {
    return function* ( next ) {
        try {
            yield next;
        } catch ( err ) {
            this.fail( parseInt( err.code ) || 422, err );
        }
    };
};

exports[ '@singleton' ] = true;
