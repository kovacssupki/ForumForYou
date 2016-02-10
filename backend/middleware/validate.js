'use strict';

exports = module.exports = ( v ) => {
    return ( validations, handler, strict ) => {
        return function *( ) {
            let count = validations.length,
                body  = this.request.body,
                bodyCount;

            if( strict ) {
                bodyCount = body ? Object.keys( body ).length : 0;
            }

            while( count -- ) {
                let rule = validations[ count ],
                    validators = rule.validators,
                    validatorCount = validators.length,
                    value;

                switch( rule.type ) {
                    case 'path':
                        value = arguments[ rule.index ];
                    break;
                    case 'body':
                        var o = body,
                            parts = rule.param.split( '.' ),
                            current;

                        do {
                            current = parts.shift( );
                            o = o[ current ];
                            if ( !o ) {
                                value = undefined;
                            }
                        } while( parts.length && current && o );

                        if ( !parts.length ) {
                           value = o;
                        }
                    break;
                    default:
                        var location = this.request[ rule.type ];
                        value = location && location[ rule.param ];
                    break;
                }

                let i = 0,
                    c = v( value );

                while ( i < validatorCount ) {
                    let validator = validators[ i ],
                        res = c[ validator.name ].apply( c, validator.params );
                    if( res.error ) {
                        throw new Error( rule.param + ' ' + res.error );
                    }

                    i ++;
                }

                if( strict && rule.type === 'body' ) {
                    bodyCount --;
                }

            }

            if( strict && bodyCount > 0 ) {
                throw new Error( 'unknown parameters provided' );
            }

            yield* handler.apply( this, arguments );
        };
    };
};

exports[ '@singleton' ] = true;
exports[ '@require' ] = [
    'libs/validator'
];
