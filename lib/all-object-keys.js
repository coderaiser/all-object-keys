'use strict';

const isObject = (obj) => {
    return typeof obj === 'object';
};

const isEmptyObject = (obj) => {
    return !Object.keys(obj).length;
}

module.exports = (divider, obj) => {
    if (!obj) {
        obj = divider;
        divider = '.';
    }
    
    check(divider, obj);
    
    return keys(divider, '', obj);
};

function check(divider, obj) {
    if (typeof divider !== 'string')
        throw Error('divider should be a string!');
    
    if (typeof obj !== 'object')
        throw Error('obj should be an object!');
}

function keys(divider, path, obj, array) {
    if (!array)
        array = [];
    
    if (!obj || !isObject(obj) || isEmptyObject(obj))
        array.push(path);
    else
        Object.keys(obj).forEach((key) => {
            const current = !path ?
                key
                :
                [path, key].join(divider);
             
            keys(divider, current, obj[key], array);
        });
    
    return array;
}

