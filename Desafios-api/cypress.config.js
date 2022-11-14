const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/api/**/*.{js,jsx,ts,tsx}',
    env: {
      wooCommerce: 'http://localhost/index.php/wp-json/wc/v3*',
      coupons: '/coupons'
    }
  }
})