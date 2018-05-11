const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.join(__dirname)
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use:{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            localIdentName: '[name]_[local]--[hash:base64:5]'
                        }
                    }
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['transform-react-jsx', 'react-css-modules']
                    }
              }
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            },
            {
                test: /\.png|\.gif|\.json/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin('bundle.css')
    ]
}
