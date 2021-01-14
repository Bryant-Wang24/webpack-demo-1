const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const { title } = require('process');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '王秋爽',
            template: 'src/assets/index.html'
        }),

    ],
};