'use strict';

const isObject = (obj) => {
    return typeof obj === 'object';
};

const isEmptyObject = (obj) => {
    return !Object.keys(obj).length;
}

const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

module.exports = (userOptions, obj) => {
    var options = {
        divider: '.',
        iPrefix: '',
        iSuffix: ''
    };

    if(typeof userOptions === 'object'){
        if(!obj){
            obj = userOptions;
        }else{
            options = Object.assign(options, userOptions);
        }
    }

    check(options.divider, obj);

    return keys(options, '', obj);
};

function check(divider, obj) {
    if (typeof divider !== 'string'){
        throw Error('divider should be a string!');
    }

    if (typeof obj !== 'object'){
        throw Error('obj should be an object!');
    }
}

function keys(options, path, obj, array) {
    if (!array){
        array = [];
    }

    if (!obj || !isObject(obj) || isEmptyObject(obj)){
        array.push(path);
    }else{
        Object.keys(obj).forEach((origKey) => {
            var key = origKey;
            var divider = options.divider;

            if(isNumber(key) && options.iPrefix){
                divider = '';
                key = options.iPrefix+key+options.iSuffix;
            }

            const current = !path ? key : [path, key].join(divider);

            keys(options, current, obj[origKey], array);
        });
    }

    return array;
}

