// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

require('dotenv').config();

const config: PlaywrightTestConfig = {
  // Look for test files
  testDir: './e2e/',

  // Each test is given 30 seconds
  timeout: 10000,

  // Two retries for each test
  retries: 2,

  use: {
    headless: process.env.CI === 'true' || process.env.E2E_HEADLESS === 'true' || false,
    launchOptions: {
      slowMo: process.env.AT_SLOW_MOTION ? Number(process.env.AT_SLOW_MOTION) : 0,
    },

    // Browser options

    // Context options
    viewport: { width: 1280, height: 720 },

    // Artifacts
    trace: 'retry-with-trace',
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
  },

  projects: [
    {
      name: 'Chrome Stable',
      use: {
        browserName: 'chromium',
      },
    },
    // Test against mobile viewports.
    {
      name: 'Mobile Chrome',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5'],
      },
    },
  ],
};

export default config;
