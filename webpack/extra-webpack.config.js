const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const utils = require('./utils.js');

const plugins = [
  new CopyWebpackPlugin([ // Copy assets to the dist folder
    {from: 'src/favicon.ico', to: 'favicon.ico'},
  ]),
  new MergeJsonWebpackPlugin({ // Find and merge json files for each language
    output: {
      groupBy: [
        {pattern: "./src/**/en/**/*.json", fileName: "i18n/en.json"},
        {pattern: "./src/**/fr/**/*.json", fileName: "i18n/fr.json"}
      ]
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      BUILD_TIMESTAMP: `'${new Date().getTime()}'`,
      VERSION: `'${utils.parseVersion()}'`
    }
  }),
  new MomentLocalesPlugin({
    localesToKeep: ['en'],
  })
];

module.exports = {
  module: {
    rules: [
      {
        test: /manifest.webapp$/, // Load manifest webapp for chrome
        loader: 'file-loader?name=manifest.webapp'
      },
      {
        test: /browserconfig.xml/, // Load manifest webapp for chrome
        loader: 'file-loader?name=browserconfig.xml'
      }
    ]
  },
  plugins: plugins
};
