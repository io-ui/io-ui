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
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    }
                }
            }, {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('media/[name].[hash:7].[ext]')
                    }
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                    }
                }
            }, {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}
