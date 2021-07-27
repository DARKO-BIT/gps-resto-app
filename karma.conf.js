/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
// eslint-disable-next-line func-names
module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'specs/**/*Spec.js',
        ],

        exclude: [],

        preprocessors: {
            'specs/**/*Spec.js': ['webpack', 'sourcemap'],
        },

        webpack: {
            devtool: 'inline-source-map',
            mode: 'development',
        },
        webpackMiddleware: {
            stats: 'errors-only',
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
    });
    // eslint-disable-next-line eol-last
};