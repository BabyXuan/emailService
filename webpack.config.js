const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        publicPath: '/'
    },
    target: 'node',
    externals: nodeExternals(),
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'production'`,
                MJ_APIKEY_PRIVATE: `'2802ded507d359f077fbf0b0f4d3bc6d'`,
                MJ_APIKEY_PUBLIC: `'7424f01cfba2096dec4ac26b2c5cc163'`
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
