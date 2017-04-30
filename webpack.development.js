import StyleLintPlugin from 'stylelint-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';

const config = {
  watch: true,

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      }
    ]
  },

  plugins: [
    new StyleLintPlugin(),
    new LiveReloadPlugin()
  ]
};

export default config;
