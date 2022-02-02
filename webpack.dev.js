const parent = require('@js-boot/react/config/webpack/webpack.dev');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const searchTeaserApiResponse = require('./public/searchTeaserApiResponse.json');

module.exports = merge(parent, common, {
  devServer: {
    open: {
      target: ['/'],
    },
    onBeforeSetupMiddleware: ({ app }) => {
      app.get('/searchTeaserApi', function (req, res) {
        res.json(searchTeaserApiResponse);
      });
    },
  },
});
