'use strict';

exports = module.exports = () => {
    return {
        host: '127.0.0.1',
        port: 8055,
        jsonLimit: '20mb',
    };
}

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

exports['@singleton'] = true;
