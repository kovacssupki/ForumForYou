'use strict';
exports = module.exports = ( io ) => {
    return function* (  ) {
      io.on('connection', function(socket){
          console.log('a user connected');
      });
    };
};
exports[ 'singleton' ] = true;
exports[ '@require' ] = [
    'node_modules/socket.io'
];
