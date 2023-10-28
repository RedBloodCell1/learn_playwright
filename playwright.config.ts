import { PlaywrightTestConfig, defineConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: ["tests/windows.test.ts"],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    // launchOptions: {
    //   slowMo: 1000,
    // },
  },
  retries: 0,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
};

export default config;
