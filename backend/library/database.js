'use strict';
var mongoose = require('mongoose'),
    ioc = require('electrolyte'),
    fs = require('fs'),
    path = require('path'),
    async = require('async');

    function setup(conn, sharding) {
        var dbName = conn.name,
            ensureIndexes = (conn, sharding) => {
                async.parallel(loadModels().map((model) => {
                    return (callback) => {
                        let sharded = !!model.schema.options.shardKey;

                        if (sharding && sharded) {
                            let shardKey = model.schema.options.shardKey,
                                unique = shardKey._unique;
                            delete shardKey._unique;
                            conn.db.admin().command({
                                shardCollection: dbName + '.' + model.collection.name,
                                key: shardKey,
                                unique: unique
                            }, (err) => {
                                if (err && err.message !== 'already sharded') {
                                    throw err;
                                }
                                model.ensureIndexes(callback);
                            });
                        } else {
                            model.ensureIndexes(callback);
                        }
                    };
                }));
            };
            if (sharding) {
                conn.db.admin().command({enableSharding: dbName}, (err) => {
                    if (err && err.message !== 'already enabled') {
                        throw err;
                    }
                    ensureIndexes(conn, sharding);
                });
            } else {
                ensureIndexes(conn, sharding);
            }
        }

exports = module.exports = (settings) => {
    var db = mongoose.connect(settings.dbUri, settings.dbOptions),
        conn = db.connection;

    if (settings.dbDebug) {
        mongoose.set('debug', true);
    }

    conn.once('connected', () => {
        conn.on('reconnected', () => {
            console.error('[mongoose] reconnected to mongo');
        });
        conn.on('error', (error) => { // keep this?
            console.error('[mongoose]', error.name, error.message);
        });

        // if (process.env.NODE_ENV !== 'production') {
        //     setup(conn, settings.dbSharded);
        // }
    });

    return db;
};

exports['@singleton'] = true;
exports['@require'] = ['libs/settings'];
