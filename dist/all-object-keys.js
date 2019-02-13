(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.allObjectKeys = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"allkeys":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isObject = function isObject(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

var isEmptyObject = function isEmptyObject(obj) {
    return !Object.keys(obj).length;
};

module.exports = function (divider, obj) {
    if (!obj) {
        obj = divider;
        divider = '.';
    }

    check(divider, obj);

    if (isEmptyObject(obj)) return [];

    return keys(divider, '', obj);
};

function check(divider, obj) {
    if (typeof divider !== 'string') throw Error('divider should be a string!');

    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') throw Error('obj should be an object!');
}

function keys(divider, path, obj, array) {
    if (!array) array = [];

    if (!obj || !isObject(obj) || isEmptyObject(obj)) array.push(path);else Object.keys(obj).forEach(function (key) {
        var current = !path ? key : [path, key].join(divider);

        keys(divider, current, obj[key], array);
    });

    return array;
}
},{}]},{},["allkeys"])("allkeys")
});
