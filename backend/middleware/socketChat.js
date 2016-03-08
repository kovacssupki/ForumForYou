'use strict';
exports = module.exports = () => {
	return ( socket, io ) => {
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

	}
}
exports[ 'singleton' ] = true;
// exports[ '@require' ] = [
//    'node_modules/socket.io'
// ];