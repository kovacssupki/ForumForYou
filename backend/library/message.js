'use strict';



exports = module.exports = ( ) => {
    let validAction = [ 'addDisplay', 'screenshot', 'reboot', 'turnOff', 'deploy', 'status', 'upgrade', 'resetContent' ],
        getMessageId = ( id ) => {
            return id + '|' + new Date().getTime();
        },
        isMessageValid = function ( obj ) {
            if (String(obj.status) === obj.status &&
                    obj.action && validAction.indexOf(obj.action) !== -1 &&
                    obj.id &&
                    (obj.data || obj.error) ) {
                return true;
            }
        };

    return {
        validateMessage: function ( msg ) {
            try {
                let obj = JSON.parse ( msg );
                if ( isMessageValid( obj ) )  {
                    return obj;
                }
                return;
            } catch (err) {
                return;
            }
        },
        getAddMessage: function ( msgObj ) {
            if (msgObj.status === 'success' &&
                    msgObj.action === 'addDisplay' &&
                    msgObj.data.displayId && msgObj.data.sdkVersion &&
                    msgObj.data.firmwareVersion && msgObj.data.ip &&
                    msgObj.data.mac)  {
                return msgObj;
            }
        },
        getScreenshotMessage: function ( msgObj ) {
            if (msgObj.action === 'screenshot' &&
                    ((msgObj.status === 'success' && msgObj.data.data && msgObj.data.size) ||
                        (msgObj.status === 'fail' && msgObj.error.msg) )) {
                return msgObj;
            }
        },
        getRebootMessage: function ( msgObj ) {
            if (msgObj.action === 'reboot' &&
                    ( msgObj.status === 'success' ||
                        (msgObj.status === 'fail' && msgObj.error.msg) )) {
                return msgObj;
            }
        },
        getTurnOffMessage: function ( msgObj ) {
            if (msgObj.action === 'turnOff' &&
                    ( msgObj.status === 'success' ||
                        (msgObj.status === 'fail' && msgObj.error.msg) )) {
                return msgObj;
            }
        },
        getDeployMessage: function ( msgObj ) {
            if (msgObj.action === 'deploy' &&
                    ( msgObj.status === 'success' ||
                        (msgObj.status === 'fail' && msgObj.error.msg) )) {
                return msgObj;
            }
        },
        getStatusMessage: function ( msgObj ) {
            if (msgObj.action === 'status' &&
                    ((msgObj.status === 'success' && msgObj.data.storage) ||
                        (msgObj.status === 'fail' && msgObj.error.msg) )) {
                return msgObj;
            }
        },
        getUpgradeMessage: function ( msgObj ) {
            if (msgObj.action === 'upgrade' &&
                    ((msgObj.status === 'success') ||
                        (msgObj.status === 'fail' && msgObj.error.msg) )) {
                return msgObj;
            }
        },
        getResetContentMessage: function ( msgObj ) {
            if (msgObj.action === 'resetContent' &&
                (msgObj.status === 'success' ||
                (msgObj.status === 'fail' && msgObj.error.msg) )) {
                return msgObj;
            }
        },
        getSendMessageObj: function ( action, id, data ) {
            return {
                action: action,
                id: getMessageId( id ),
                data: data
            };
        }
    };
};

exports[ '@singleton' ] = true;
