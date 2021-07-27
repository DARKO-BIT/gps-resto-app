/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable array-bracket-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                    },
                },
            ],
        }],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/templates/index.html'),
            filename: 'index.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,

        }),
        // eslint-disable-next-line no-sequences
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/public/'),
                to: path.resolve(__dirname, 'dist/'),
                globOptions: {
                    ignore: ['**/heros/**'],
                },

                // eslint-disable-next-line comma-dangle
            }],
        }),

        new ServiceWorkerWebpackPlugin({
            entry: path.resolve(__dirname, 'src/scripts/sw.js'),
        }),
        new ImageminPlugin({
            plugins: [
                imageminMozjpeg({
                    quality: 50,
                    progressive: true,
                }),
            ],
            // eslint-disable-next-line eol-last
        }),
    ],
    // eslint-disable-next-line eol-last
};