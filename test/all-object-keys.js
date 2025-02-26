'use strict';

const tryCatch = require('try-catch');

const test = require('supertape');
const keys = require('..');

test('arguments: no', (t) => {
    const [error] = tryCatch(keys);
    
    t.ok(error, 'should throw when no args');
    t.end();
});

test('arguments: simplest object', (t) => {
    const result = keys({
        hello: 'world',
    });
    
    const expect = ['hello'];
    
    t.deepEqual(result, expect, 'should use default delimiter when only object provided');
    t.end();
});

test('arguments: no delimiter', (t) => {
    const result = keys({
        hello: {
            world: true,
        },
    });
    
    const expect = [
        'hello.world',
    ];
    
    t.deepEqual(result, expect, 'should use default delimiter when only object provided');
    t.end();
});

test('arguments: empty object', (t) => {
    const result = keys({});
    const expect = [];
    
    t.deepEqual(result, expect);
    t.end();
});

test('arguments: divider not string', (t) => {
    const [error] = tryCatch(keys, 1, {});
    
    t.equal(error.message, 'divider should be a string!', 'should throw when divider not string');
    t.end();
});

test('result: should return array', (t) => {
    const expect = [
        'config_plugins',
        'config_compile_client',
        'config_compile_client_min',
        'config_compile_vendor',
        'config_compile_vendor_min',
    ];
    
    const result = keys('_', {
        config: {
            plugins: 'some',
            compile: {
                client: 'hello',
                client_min: 'world',
                vendor: '31337',
                vendor_min: '1337',
            },
        },
    });
    
    t.deepEqual(result, expect, 'should get key paths');
    t.end();
});

test('result: should return array: when value is null ', (t) => {
    const expect = [
        'config_plugins',
    ];
    
    const result = keys('_', {
        config: {
            plugins: null,
        },
    });
    
    t.deepEqual(result, expect, 'should get key paths');
    t.end();
});

test('result: should return array: when value is empty object', (t) => {
    const expect = [
        'config_plugins',
    ];
    
    const result = keys('_', {
        config: {
            plugins: {},
        },
    });
    
    t.deepEqual(result, expect, 'should get key paths');
    t.end();
});

test('result: should return array: nested link', (t) => {
    const expected = ['hello'];
    
    const object = {
        hello: 'world',
        default: {},
    };
    
    object.default = object;
    
    const result = keys('_', object);
    
    t.deepEqual(result, expected, 'should get key paths');
    t.end();
});

test('result: sorted array', (t) => {
    const object = {
        line: [{
            type: 'hello',
        }, {
            type: 'world',
        }],
    };
    
    const result = keys('/', object);
    const expected = [
        'line/0/type',
        'line/1/type',
    ];
    
    t.deepEqual(result, expected, 'should get key paths');
    t.end();
});
