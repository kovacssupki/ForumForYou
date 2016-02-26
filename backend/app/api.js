'use strict';

var koa         = require( 'koa' ),
    koa_body    = require( 'koa-body' ),
    koa_static  = require( 'koa-static'),
    livereload = require('koa-livereload');


exports = module.exports = ( routes, responsify, settings, logging, router, validate ) => {

    routes.forEach((r) => {
        let handler = r.handler,
            needsValidation = r.validate instanceof Array && r.validate.length;

        if( needsValidation ) {
            let strict = r.strict === undefined ? true : r.strict;
            handler = validate( r.validate, handler, strict );
        }

        router[ r.method ]( r.path, handler, r.handlerName );
    });

    let app = responsify( koa( ) );
    app.use(koa_static('../frontend'));
    app.use(koa_static('../frontend/src'));
    //app.use( koa_static(settings.path.appsData));
    //app.use( koa_static(settings.path.backup));
    //app.use( koa_static(settings.path.contentMedia));
    //app.use( koa_static(settings.path.firmware));
    //app.use( koa_static(settings.path.screenshot));
    app.use(livereload());
    console.log();
    app.use( logging );
    //app.use( authentification );
    app.use( koa_body( {
        jsonLimit: settings.jsonLimit,
        multipart: true,
    }));
    app.use( router.demux );

    return app;
};

exports[ '@singleton' ] = true;
exports[ '@require' ] = [
    'app/routes',
    'library/responsify',
    'library/settings',
    'middleware/logging',
    'middleware/router',
    'middleware/validate',
    'models/users',
];
