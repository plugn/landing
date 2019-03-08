const Webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const { setupPath } = require('./helpers');
const paths = require('./paths');

module.exports = ({ mode }) => {
  // eslint-disable-next-line global-require
  const commonConfig = require('./webpack.common.js')(mode);

  return webpackMerge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',

    output: {
      path: paths.dist,
      filename: '[name].[hash].js',
      chunkFilename: '[id].[hash].chunk.js',
    },

    performance: {
      hints: 'warning', // enum
      maxAssetSize: 200000, // int (in bytes),
      maxEntrypointSize: 400000, // int (in bytes)
      assetFilter: assetFilename => (
        // Function predicate that provides asset filenames
        assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
      ),
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
      new HtmlWebpackPlugin({
        template: setupPath('./templates/index.html'),
        minify: {
          collapseWhitespace: false,
          keepClosingSlash: true,
          minifyCSS: false,
          minifyJS: true,
          minifyURLs: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer',
      }),
      new Webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      new CompressionPlugin({
        test: /\.(png|jpe?g|gif)$/,
      }),
    ],
  });
};
