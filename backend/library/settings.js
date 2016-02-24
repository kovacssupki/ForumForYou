'use strict';

var loadEnv = require('with-env');

exports = module.exports = () => {

    // hack :(
    var mongoUri = process.env.MONGO_URI;
    loadEnv();
    return {
        cpuCount: parseInt(process.env.CPUS, 10),
        // dbEncryptKey: process.env.DB_ENCRYPT_KEY,
        // dbSharded: !!parseInt(process.env.DB_SHARDED, 10),
        dbUri: process.env.NODE_ENV === 'test' ? process.env.MONGO_TEST_URI : (mongoUri || process.env.MONGO_URI),
        dbOptions: {
            db: {
                native_parser: true
            },
            server: {
                poolSize: 5
            },
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASS
        },
        dbDebug: !!parseInt(process.env.MONGO_DEBUG, 10),
        syslogName: 'forumForYou',
        webHost: process.env.API_ADDRESS,
        webPort: process.env.API_PORT
    };

};

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

exports['@singleton'] = true;
