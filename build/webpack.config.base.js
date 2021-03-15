'use strict'

const {VueLoaderPlugin} = require('vue-loader')

const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'assets': utils.resolve('assets'),
            'static': utils.resolve('static'),
            'packages': utils.resolve('packages'),
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}
