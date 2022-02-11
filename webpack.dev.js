const parent = require('@js-boot/react/config/webpack/webpack.dev');
const { merge } = require('webpack-merge');
const express = require('express');
const common = require('./webpack.common');

const searchTeaserApiResponse = require('./public/searchTeaserApiResponse.json');

module.exports = merge(parent, common, {
  devServer: {
    open: {
      target: ['/'],
    },
    onBeforeSetupMiddleware: ({ app }) => {
      let counter = 0;
      app.use(express.json());
      app.get('/counter', function (req, res) {
        // if (Math.random() < 0.5) {
        //   res.sendStatus(500);
        // } else {
        res.json({ counter });
        // }
      });
      app.put('/counter', function (req, res) {
        counter = req.body.counter;
        // res.sendStatus(200);
        res.json({ counter });
      });
    },
  },
});
