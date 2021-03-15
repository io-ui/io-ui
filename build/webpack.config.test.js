'use strict'
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const srcPath = path.resolve(__dirname, '../src')

module.exports = merge(baseConfig, {
    devtool: '#inline-source-map', // 推荐使用inline-source-map
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }, {
                test: /\.styl(us)?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ]
            }, {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'istanbul-instrumenter-loader',
                query: {
                    esModules: true
                },
                include: [srcPath],
                exclude: /node_modules|index\.js$|\.spec\.js$/,
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
})
