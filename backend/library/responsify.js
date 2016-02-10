'use strict';

exports = module.exports = ( ) => {

    // pre-create status objects to prevent on-the-fly creation
    var responseSuccess = {
            status: 'success',
            data: { }
        },
        responseFail = {
            status: 'error',
            error: {
                code: 500,
                msg: 'Internal Server Error',
                details: {}
            }
        };

    return ( app ) => {
        app.context.success = ( data ) => {
            responseSuccess.data = data;
            this.body = responseSuccess;
        };

        app.context.fail = ( code, error ) => {
            responseFail.error.code = error.code;
            responseFail.error.msg = error.message;
            responseFail.error.details = error.details;

            this.status = code;
            this.body = responseFail;
        };

        return app;
    };
};

exports[ '@singleton' ] = true;

