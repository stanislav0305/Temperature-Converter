const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
const distDir = devMode ? 'build' : 'docs';

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 3000,
        open: true,
        hot: true
    },
    entry: [path.resolve(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, distDir),
        clean: true,
        filename: 'index.[contenthash].js',
    },
    plugins:[
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ]
    }, 
}