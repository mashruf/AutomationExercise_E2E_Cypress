const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { allureCypress } = require("allure-cypress/reporter");


module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      // Clean allure-results folder before tests
      const resultsDir = path.join(__dirname, "allure-results");
      if (fs.existsSync(resultsDir)) {
        fs.rmSync(resultsDir, { recursive: true, force: true });
      }


      // Setup bundler with cucumber-esbuild plugin
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);


      // Add Cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);


      // Setup Allure reporter with output directory
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });


      return config;
    },
  },
});
