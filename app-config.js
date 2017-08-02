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
  DIO_API_URL: "https://api.dorel.io/v1",
  ECOM_URL: "http://mage2.api.dev-mc.dorel-app.net",

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
};
