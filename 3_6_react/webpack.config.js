const webpack = require('webpack');
const path = require('path');

module.exports = [{
    cache: true,
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
    },
    context: path.resolve(__dirname, 'src'),
    entry: './Routes.tsx',
    output: {
        path: __dirname + "/dist/js",
        filename: 'build.js',
        publicPath: '/dist/js',
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.ts', '.tsx', '.js'],
    },
}];
