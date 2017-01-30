(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.allObjectKeys = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"allkeys":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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