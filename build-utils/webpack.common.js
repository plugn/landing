// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const postcssPresetEnv = require('postcss-preset-env');

const { setupPath } = require('./helpers');
const paths = require('./paths');

module.exports = (mode) => {
  const prodMode = mode === 'production';
  return {

    entry: ['./src/main.js'],

    resolve: {
      alias: {
        '@': `${paths.src}`,
        vue$: 'vue/dist/vue.esm.js',
        // api: `${paths.src}/api`,
        Admin: `${paths.src}/pages/Admin`,
        assets: `${paths.src}/assets`,
        components: `${paths.src}/components`,
        constants: `${paths.src}/constants`,
        core: `${paths.src}/components/core`,
        directives: `${paths.src}/directives`,
        pages: `${paths.src}/pages`,
        services: `${paths.src}/services`,
        store: `${paths.src}/store`,
        styles: `${paths.src}/assets/scss`,
        utils: `${paths.src}/utils`,
      },
      extensions: ['.js', '.vue', '.json'],
    },

    module: {
      // rules for modules (configure loaders, parser options, etc.)
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js?$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          resourceQuery: /blockType=i18n/,
          type: 'javascript/auto',
          loader: '@kazupon/vue-i18n-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: prodMode ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins() { // post css plugins, can be exported to postcss.config.js
                  return [
                    // eslint-disable-next-line global-require
                    require('precss'),
                    // eslint-disable-next-line global-require
                    require('autoprefixer'),
                    postcssPresetEnv(),
                  ];
                },
              },
            },
            /**
             * @link - https://www.npmjs.com/package/resolve-url-loader
             */
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceMapContents: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      // new webpack.ProgressPlugin(progressHandler),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: prodMode ? '[name].[hash].css' : '[name].css',
        chunkFilename: prodMode ? '[id].[hash].css' : '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: setupPath('../src/index.html'),
      }),
      // copy files and folders to specific paths.
      // new CopyWebpackPlugin([{
      //   // Copy `assets` contents to {output}/assets/
      //   from: 'src/assets',
      //   to: 'assets',
      //   ignore: [
      //     // Doesn't copy any files with a scss extension
      //     '*.scss',
      //   ],
      // }]),
    ],
  };
};
