/**
 * @constant
 * @name CONFIG
 * @description all constants for the application to use
 */
var CONFIG = {
  /**
   * build script will change this
   */
  CMS_URL: "//dorel-wp.dev/wp-json",
  DIO_API_URL: "//api.dorel.io/v1",
  ECOM_URL: "//mage2.api.dev-mc.dorel-app.net",

  /**
   * Determines the shared brand theme used for the application.
   * Name strings can only contain alphabetic values
   * and dashes to separate words:
   * - maxi-cosi
   * - dorel
   * - quinny
   * - safety-first
   * - baby-art
   */
  AVAILABLE_BRANDS: [{'label': 'Maxi-Cosi'}, {'label': 'Dorel'}],
  SELECTED_BRAND: 0,
  /**
   * The following information is localization info used in several parts
   */
  LOCALE: {
    COUNTRY_NAME: 'australia',       // country name in own country language (capitalized)
    COUNTRY_CODE: 'AU',         // country code (used for storelocator)
    LANGUAGE: 'en',             // language in short notation
    LANG_CONTENT: 'en-AU',
    LINK_ALT: 'http://www.maxi-cosi.com/au-en'
  },
  /* TODO: This is temporarily disabled for deployment
  BYNDER_API_URL: 'https://dam.doreljuvenile.com/api/v4',
  BYNDER_CONSUMER_KEY: 'CCA3E48C-184A-49C7-B322303E639A848E',
  BYNDER_CONSUMER_KEY_SECRET: '68eeda6cc0bb999e56fe0add1539fa75',
  BYNDER_TOKEN_KEY: '9E61BF2F-4D70-4360-B383C1053F8CAAAD',
  BYNDER_TOKEN_KEY_SECRET: 'ca21b7af36f51922865b14263723f061'*/
};
