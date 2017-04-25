(function() {
  'use strict';
  /**
   *  Load webcomponents only for other browsers than Chrome
   */
  // polyfill the platform!
  var e = document.createElement('script');
  e.src = '/bower_components/webcomponentsjs/webcomponents-lite.min.js';
  document.body.appendChild(e);

  /**
   * Find polyfill for IE
   */
  if ( !Array.prototype.find ) {
    Array.prototype.find = function(predicate) {
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    };
  }
})();