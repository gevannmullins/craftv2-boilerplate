import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass'
        )
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        booleans: true,
        cascade: true,
        collapse_vars: true,
        comparisons: true,
        conditionals: true,
        dead_code: true,
        drop_console: false,
        drop_debugger: true,
        evaluate: true,
        hoist_funs: true,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        keep_fargs: true,
        loops: true,
        negate_iife: true,
        properties: true,
        pure_funcs: false,
        pure_getters: true,
        sequences: true,
        side_effects: true,
        unsafe: true,
        unused: true,
        warnings: false
      },
      mangle: {
        eval: true,
        properties: true,
        sort: true,
        toplevel: true
      },
      comments: false,
      stats: 0,
      'mangle-props': true,
      'mangle-regex': true,
      'pure-funcs': true
    })
  ]
};

export default config;
