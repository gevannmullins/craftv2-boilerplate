import path from 'path';
import merge from 'webpack-merge';
import webpack from 'webpack';
import validate from 'webpack-validator';
import PRODUCTION_CONFIG from './webpack.production';
import DEVELOPMENT_CONFIG from './webpack.development';

const PUBLIC_PATH = path.resolve(__dirname, 'public');

const SHARED_CONFIG = {
  entry: path.resolve(PUBLIC_PATH, 'scripts', 'main.js'),

  output: {
    path: path.resolve(PUBLIC_PATH, 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: [
            require.resolve('babel-preset-es2015')
          ]
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

let config;
switch (process.env.NODE_ENV) {
  case 'production':
    config = merge(SHARED_CONFIG, PRODUCTION_CONFIG);
    break;
  case 'development':
    config = merge(SHARED_CONFIG, DEVELOPMENT_CONFIG);
    break;
  // no default
}

export default validate(config);
