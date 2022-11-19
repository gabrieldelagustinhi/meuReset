const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    specPattern: 'cypress/api/**/*.{js,jsx,ts,tsx}',
    env: {
      wooCommerce: 'https://cena.reset.cwi.com.br/index.php/wp-json/wc/v3',
      coupons: '/coupons',
      productReviews: 'https://cena.reset.cwi.com.br/index.php/wp-json/wc/v3/products/reviews'
    },
    video: false
  }
})