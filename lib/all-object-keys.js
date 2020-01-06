'use strict';

const isObject = (a) => typeof a === 'object';
const isEmptyObject = (a) => !Object.keys(a).length;
const isSimple = (a) => !a || !isObject(a) || isEmptyObject(a);

module.exports = (divider, obj) => {
    if (!obj) {
        obj = divider;
        divider = '.';
    }
    
    check(divider, obj);
    
    if (isEmptyObject(obj))
        return [];
    
    return getAll(divider, obj);
};

function getAll(divider, obj) {
    const result = [];
    
    const [currentResult, stack] = readPaths(obj, divider);
    
    result.push(...currentResult);
    
    if (!stack.length)
        return result;
    
    do {
        const [key, current] = stack.pop() || [];
        
        if (!current)
            break;
        
        const [currentResult, currentStack] = readPaths(current, divider, key);
        
        result.push(...currentResult);
        stack.push(...currentStack);
    } while (true);
    
    return result;
}

const {entries} = Object;

function readPaths(obj, divider, path = '') {
    const result = [];
    const stack = [];
    
    for (const [key, value] of entries(obj)) {
        const fullPath = !path ? key : `${path}${divider}${key}`;
        
        if (isSimple(value)) {
            result.push(fullPath);
            continue;
        }
        
        stack.push([fullPath, value]);
    }
    
    return [result, stack];
}

function check(divider, obj) {
    if (typeof divider !== 'string')
        throw Error('divider should be a string!');
    
    if (typeof obj !== 'object')
        throw Error('obj should be an object!');
}

