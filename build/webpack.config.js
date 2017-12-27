/**
 * Develop config
 */

const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const vuxLoader = require('vux-loader');

const webpackConfig = {

    entry: [
        path.resolve(__dirname, '../app/bootstrap.js')
    ],

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    module: {

        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader',                // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'  // <style lang="sass">
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }

        ]
    },


    resolve: {
        extensions: ['.js', '.vue', '.json', 'less'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: path.resolve(__dirname, '../app/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

};

module.exports = vuxLoader.merge(webpackConfig, {
    options: {
        projectRoot: '/Users/JJM/code/catch/vue-cli/catch/'
    },
    plugins: ['vux-ui']
});
