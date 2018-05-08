const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/style.css')
  ],
  resolve: {
    extensions: ['.js', '.css']
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    historyApiFallback: true,
    port: 3000
  },
};
