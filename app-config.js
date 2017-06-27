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

  /**
   * Determines the shared brand theme used for the application.
   * Name strings can only contain lower-case, alphabetic values 
   * and dashes to separate words:
   * - maxi-cosi
   * - dorel
   * - quinny
   * - safety-first
   * - baby-art
   */
  BRAND_NAME: 'Maxi-Cosi',

  /**
   * The following information is localization info used in several parts
   */
  LOCALE: {
    COUNTRY: 'Australia',       // country name in own country language (capitalized)
    LANGUAGE: 'en',             // language in short notation
    LANG_CONTENT: 'en-AU',
    LINK_ALT: 'http://www.maxi-cosi.com/au-en'
  },
};
