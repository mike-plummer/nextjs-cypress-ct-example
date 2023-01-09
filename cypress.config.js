const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents: (on, config) => {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
    env: {
      codeCoverage: {
        // At end of run, call this endpoint to retrieve code coverage info from the backend
        // and combine with coverage info from frontend code executed in the browser
        url: "http://localhost:3000/api/__coverage__"
      }
    }
  },
});
