/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const common = require('./webpack.common');
/* const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); */

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    },
    // eslint-disable-next-line eol-last

    // eslint-disable-next-line eol-last
});