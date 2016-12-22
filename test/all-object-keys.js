'use strict';

const test = require('tape');
const keys = require('..');

test('arguments: no', (t) => {
    t.throws(keys, 'should throw when no args');
    t.end();
});

test('arguments: no delimiter', (t) => {
    const result = keys({
        hello: {
            world: true
        }
    });

    const expect = ['hello.world'];

    t.deepEqual(result, expect, 'should use default delimiter when only object provided');
    t.end();
});

test('arguments: divider not string', (t) => {
    const fn = () => keys({divider: 1}, {});

    t.throws(fn, /divider should be a string/, 'should throw when divider not string');
    t.end();
});

test('result: should return array', (t) => {
    const expect = [
        'config_plugins',
        'config_compile_client',
        'config_compile_client_min',
        'config_compile_vendor',
        'config_compile_vendor_min'
    ];

    const result = keys({divider: '_'}, {
        config: {
            plugins: 'some',
            compile: {
                client: 'hello',
                client_min: 'world',
                vendor: '31337',
                vendor_min: '1337'
            }
        }
    });

    t.deepEqual(result, expect, 'should get key pathes');
    t.end();
});

test('result: should return array: when value is null ', (t) => {
    const expect = [
        'config_plugins',
    ];

    const result = keys({divider: '_'}, {
        config: {
            plugins: null
        }
    });

    t.deepEqual(result, expect, 'should get key pathes');
    t.end();
});

test('result: should return array: when value is null ', (t) => {
    const expect = [
        'config_plugins',
    ];

    const result = keys({divider: '_'}, {
        config: {
            plugins: null
        }
    });

    t.deepEqual(result, expect, 'should get key pathes');
    t.end();
});

test('result: should return array: when value is empty object', (t) => {
    const expect = [
        'config_plugins',
    ];

    const result = keys({divider: '_'}, {
        config: {
            plugins: {}
        }
    });

    t.deepEqual(result, expect, 'should get key pathes');
    t.end();
});
