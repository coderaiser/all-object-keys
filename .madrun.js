'use strict';

const {run} = require('madrun');

module.exports = {
    'init': () => 'mkdirp dist',
    'test': () => 'tape test/**/*.js',
    'coverage': () => 'nyc npm test',
    'report': () => 'nyc report --reporter=text-lcov | coveralls',
    'watch:test': () => run('watcher', 'npm test'),
    'watch:tape': () => 'nodemon -w test -w lib --exec tape',
    'watch:coverage:tape': () => run('watcher', 'nyc tape'),
    'watch:coverage': () => run('watcher', 'nyc npm test'),
    'watcher': () => 'nodemon -w test -w lib --exec',
    'lint': () => 'putout lib test .madrun.js',
    'fix:lint': () => run('lint', '--fix'),
};

