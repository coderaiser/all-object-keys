import {run} from 'madrun';

export default {
    'init': () => 'mkdirp dist',
    'test': () => 'tape test/**/*.js',
    'coverage': () => 'c8 npm test',
    'report': () => 'c8 report --reporter=lcov',
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
