'use strict';

let url_validator = require ( 'url-validator' );


exports = module.exports = ( fileMedia, error ) => {
    let isValidValueFile = function ( v, file ) {
            return String( v ) === v &&
                    (
                        v === '' ||
                        (file && file.name === v) ||
                        ( !file && fileMedia.existMediaFile( v ) ) ||
                        (!file && url_validator( v )
                    ));
        },
        isValidValue = function ( type, v, file ) {
            switch ( type ) {
                case 'audio':
                    return isValidValueFile(v, file);
                case 'checkbox':
                    /* jshint -W018 */
                    return v === !!v;
                    /* jshint +W018 */
                case 'image':
                    return isValidValueFile(v, file);
                case 'text':
                    return String( v ) === v;
                case 'video':
                    return isValidValueFile( v, file );
                default:
                    return false;
            }
        };

    return {
        isFieldValueFile: ( type, v ) => {
            if (type === 'audio' || type === 'image' || type === 'video')  {
                return String( v ) === v && v !== '' && !url_validator( v );
            } else {
                return false;
            }
        },
        validateFields: ( fieldsVal, fields ) => {
            if (!fields || fields.length === 0 || fields.length !== fieldsVal.length) {
                throw error.create('Invalid fields values.');
            }
            for (let i = 0; i < fields.length; i++ ) {
                let fieldVal = fieldsVal.filter( item => item._id === fields[i]._id)[0];
                if (!fieldVal) {
                    throw error.create('Invalid fields values.');
                }
            }
        },
        validateFieldsValues: (fieldsVal, fields, files) => {
            var valid = true,
                details = {};

            for (let i = 0; i < fieldsVal.length; i++ ) {
                let fieldVal = fieldsVal[i];
                let field = fields.filter( item => item._id === fieldVal._id )[0];
                if ( !field ) {
                    valid = false;
                    details[fieldVal.name] = 'Invalid field.';
                } else {
                    if ( !isValidValue( field.type, fieldVal.value, files['files' + field.name] ) ) {
                        valid = false;
                        details[fieldVal.name] = 'Invalid value.';
                    } else {
                        fieldVal.type = field.type;
                    }
                }
            }

            if ( !valid ) {
                throw error.create( 'Invalid values for fields.', details );
            }
        }
    };
};

exports[ '@singleton' ] = true;
exports[ '@require' ] = [
    'libs/fileMedia',
    'libs/error'
];
