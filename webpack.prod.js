/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable array-bracket-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 70000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                }
            }
        },

        // eslint-disable-next-line no-undef
        minimizer: [new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
        })],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            }, ],
        }, ],
    },

});