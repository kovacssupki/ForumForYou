'use strict';

let methods = require( 'methods' );

exports = module.exports = ( ) => {
    let router = {
        routes: { },
        register: ( method, path, handler, handlerName ) => {
            let tokens = path.split( '/' ),
                params = [ ];
            router.routes[ method ].push( {
                path: path,
                handler: handler,
                handlerName: handlerName,
                tokens: tokens,
                params: params
            } );
        },
        demux: function *( ) {
            let method = this.request.method.toLowerCase( ),
                path = this.request.path,
                tokens = path.split( '/' ),
                tokenCount = tokens.length,
                methodRoutes = router.routes[ method ],
                routeCount = methodRoutes.length;
            while( routeCount -- ) {
                let route = methodRoutes[ routeCount ],
                    params = route.params,
                    p = 0,
                    i = 0;

                // this is faster than the alternaties
                outerBlock: {
                    if ( route.tokens.length === tokenCount ) {
                        while( i < tokenCount ) {
                            let routeToken = route.tokens[ i ],
                                pathToken = tokens[ i ];

                            i ++;

                            if ( routeToken.charCodeAt( 0 ) === 58 ) {
                                params[ p ++ ] = pathToken;
                                continue;
                            }
                            if ( routeToken !== pathToken ) {
                                break outerBlock;
                            }
                        }

                        this.state.handlerName = route.handlerName;
                        return yield route.handler.apply( this, route.params );
                    }
                }
            }
            return;
        }
    };

    // initialize route array and method shorthand for methods
    methods.forEach( ( m ) => {
        router.routes[ m ] = [ ];
        router[ m ] = router.register.bind( router.register, m );
    } );

    return router;
};

exports[ '@singleton' ] = true;
