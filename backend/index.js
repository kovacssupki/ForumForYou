'use strict';

var ioc = require( 'electrolyte' ),
	http = require( 'http' );

// DI setup
ioc.loader( ioc.node( './' ) );

var api = ioc.create( 'app/api' ),
	settings = ioc.create( 'library/settings' ),
	database = ioc.create( 'library/database' ),
	server = http.createServer( api.callback() ),
	chat = ioc.create( 'middleware/socketChat' ),
	io = require( 'socket.io' )( server );
io.on( 'connection', socket => chat( socket, io ) );
server.listen( settings.webPort, settings.webHost );
console.log( 'ForumForYou Server is running on ' + settings.webHost + ':' + settings.webPort );