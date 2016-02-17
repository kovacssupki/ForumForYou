var mongoose = require('mongoose');

exports = module.exports = ( ) => {

  var options = {
    db: { native_parser: true },
    server: { poolSize: 5 },
    replset: { rs_name: 'myReplicaSetName' }
  }
  options.server.socketOptions = options.replset.socketOptions = { keepAlive: 120 };

  mongoose.connect('mongodb://localhost/Blog',options);
  //check connection status
      // STATES[0] = disconnected;
      // STATES[1] = connected;
      // STATES[2] = connecting;
      // STATES[3] = disconnecting;
      // STATES[4] = unauthorized;
      // STATES[99] = uninitialized;
  console.log(mongoose.connection.readyState);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

};

exports[ '@singleton' ] = true;
