(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.allObjectKeys = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"all-object-keys":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var defaultOptions = {
    divider: '.',
    iPrefix: '',
    iSuffix: ''
};

var isObject = function isObject(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

var isEmptyObject = function isEmptyObject(obj) {
    return !Object.keys(obj).length;
};

var isNumber = function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

module.exports = function (userOptions, obj) {
    var options = defaultOptions;

    if ((typeof userOptions === 'undefined' ? 'undefined' : _typeof(userOptions)) === 'object') {
        if (!obj) {
            obj = userOptions;
        } else {
            options = Object.assign(options, userOptions);
        }
    }

    check(options.divider, obj);

    return keys(options, '', obj);
};

function check(divider, obj) {
    if (typeof divider !== 'string') {
        throw Error('divider should be a string!');
    }

    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        throw Error('obj should be an object!');
    }
}

function keys(options, path, obj, array) {
    var divider = options.divider;

    if (!array) {
        array = [];
    }

    if (!obj || !isObject(obj) || isEmptyObject(obj)) {
        array.push(path);
    } else {
        Object.keys(obj).forEach(function (origKey) {
            var key = origKey;
            if (isNumber(key) && options.iPrefix) {
                divider = '';
                key = options.iPrefix + key + options.iSuffix;
            }

            var current = !path ? key : [path, key].join(divider);

            keys(options, current, obj[origKey], array);
        });
    }

    return array;
}
},{}]},{},["all-object-keys"])("all-object-keys")
});