/**
 * Production Config
 */

let path = require('path');

let webpack = require('webpack');

let config = require('./webpack.config');
// config.plugins.push(new webpack.optimize.UglifyJsPlugin({
//
//     cacheFolder: path.resolve(__dirname, '../cache'),
//
//     compress: {
//         warnings: false
//     }
//
// }));

module.exports = config;
