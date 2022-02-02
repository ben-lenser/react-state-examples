const parent = require('@js-boot/react/config/webpack/webpack.pro');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(parent, common, {
  output: {
    publicPath: '/',
  },
});
