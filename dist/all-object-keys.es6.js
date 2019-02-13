(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.allObjectKeys = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"allkeys":[function(require,module,exports){
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
    
    if (isEmptyObject(obj))
        return [];
    
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


},{}]},{},["allkeys"])("allkeys")
});
