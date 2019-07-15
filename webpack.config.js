/* eslint-disable */


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: { main: './html/tribute-page/src/index.jsx' },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'html/tribute-page', 'dist')
    },
    devServer: {
        contentBase: './html/tribute-page/'

    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: '/home/sakura/free-code-camp/html/tribute-page/src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};