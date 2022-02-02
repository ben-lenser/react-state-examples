const defaultConfig = require('@js-boot/react/config/jest/jest.config.js');

module.exports = {
  ...defaultConfig,
  setupFilesAfterEnv: ['./jest.setup.js'],
};
