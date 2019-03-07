const webpackMerge = require('webpack-merge');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const paths = require('./paths');
const { PORT } = require('./helpers');

module.exports = (env) => {
  // eslint-disable-next-line global-require
  const commonConfig = require('./webpack.common')(env);

  return webpackMerge(commonConfig, {
    mode: 'development',
    devtool: 'source-map',

    output: {
      path: paths.dist,
      publicPath: `http://localhost:${PORT}/`,
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
    },

    devServer: {
      // By default it will use your current working directory to serve content,
      // but you can modify this to another directory
      contentBase: paths.src,
      compress: true,
      port: PORT,
      /**
       * Basically tells the dev-server "hey! if you don't match something here,
       * the browser probable would know what to do with it"
       */
      historyApiFallback: true,
      hot: true,
    },

    plugins: [
      // copy custom static assets
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../static'),
          to: 'static',
          ignore: ['*.scss', '.*'],
        },
      ]),
      new HardSourceWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
      new webpack.NoEmitOnErrorsPlugin(),
    ],

  });
};
