const { EnvironmentPlugin } = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/'),
  },
  devServer: {
    open: true
  },
  plugins: [
    new EnvironmentPlugin({
      PUBLIC_URL: '/'
    })
  ]
};
