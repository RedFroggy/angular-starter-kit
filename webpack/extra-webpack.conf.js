const webpack = require('webpack');
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const utils = require('./utils.js');

const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin({branch: true});

const plugins = [
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
      VERSION: `'${utils.parseVersion()}'`,
      GIT_COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
      GIT_BRANCH: JSON.stringify(gitRevisionPlugin.branch()),
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
        use: {
          loader: 'file-loader?name=manifest.webapp'
        }
      },
      {
        test: /browserconfig.xml/,
        use: {
          loader: 'file-loader?name=browserconfig.xml'
        }
      }
    ]
  },
  plugins: plugins
};
