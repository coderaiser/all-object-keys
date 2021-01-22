import {run} from 'madrun';

export default {
    'init': () => 'mkdirp dist',
    'test': () => 'tape test/**/*.js',
    'coverage': () => 'nyc npm test',
    'report': () => 'nyc report --reporter=text-lcov | coveralls',
    'watch:test': () => run('watcher', 'npm test'),
    'watch:tape': () => 'nodemon -w test -w lib --exec tape',
    'watch:coverage:tape': () => run('watcher', 'nyc tape'),
    'watch:coverage': () => run('watcher', 'nyc npm test'),
    'watcher': () => 'nodemon -w test -w lib --exec',
    'lint': () => 'putout .',
    'fresh:lint': () => run('lint', '--fresh'),
    'lint:fresh': () => run('lint', '--fresh'),
    'fix:lint': () => run('lint', '--fix'),
};

