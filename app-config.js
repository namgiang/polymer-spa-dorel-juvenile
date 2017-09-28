/**
 * @constant
 * @name CONFIG
 * @description all constants for the application to use
 */
var CONFIG = {
  CMS_URL: "http://dorel-spa.local:8000/wp-json",                                           // Used for endpoints to CMS
  DIO_API_URL: "https://api.dorel.io/v1",                                   // Used for the multi management tool
  ECOM_URL: "https://mage2.api.dev-mc.dorel-app.net",                                         // Used for the e-commerce platform
  AVAILABLE_BRANDS: [{'label': 'Maxi-Cosi', 'value': 0}, {'label': 'Dorel', 'value': 1}, {'label': 'Quinny', 'value': 2}],   // Available brands to pick from
  SELECTED_BRAND: 0,                               // Selects a brand from AVAILABLE_BRANDS
  LOCALE: {
    COUNTRY_NAME: 'Australia',
    COUNTRY_CODE: 'AU',
    LANGUAGE: 'en',
    LANG_CONTENT: 'en-AU',
    LINK_ALT: 'http://www.maxi-cosi.com/au-en'
  },
  BYNDER_API_URL: 'https://dam.doreljuvenile.com/api/v4',
  BYNDER_CONSUMER_KEY: 'CCA3E48C-184A-49C7-B322303E639A848E',
  BYNDER_CONSUMER_KEY_SECRET: '68eeda6cc0bb999e56fe0add1539fa75',
  BYNDER_TOKEN_KEY: '9E61BF2F-4D70-4360-B383C1053F8CAAAD',
  BYNDER_TOKEN_KEY_SECRET: 'ca21b7af36f51922865b14263723f061',
};
