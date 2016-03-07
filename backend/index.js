'use strict';

var ioc = require( 'electrolyte' ),
	http = require( 'http' );

// DI setup
ioc.loader( ioc.node( './' ) );

var api = ioc.create( 'app/api' ),
	settings = ioc.create( 'library/settings' ),
	database = ioc.create( 'library/database' ),
	server = http.createServer( api.callback() ),
	io = require( 'socket.io' )( server );
io.on( 'connection', function ( socket ) {
	socket.broadcast.emit( 'connection', {
		message: 'hi'
	} );
	console.log( 'a user connected' );
	socket.on( 'message', function ( msg ) {
		console.log( 'message: ' + msg );
		io.emit( 'message', {
			message: msg
		} );
	} );
	socket.on( 'disconnect', function () {
		console.log( 'user disconnected' );
	} );
} );
server.listen( settings.webPort, settings.webHost );
console.log( 'ForumForYou Server is running on ' + settings.webHost + ':' + settings.webPort );