/**
     * Kickstarts the data needed for the application
     * - adds the window.location.origin for IE
     * - Retrieves the AppConfig data
     * - Import correct brand styles
     * - Import the dorel-app webcomponent
     */
    var dorelKickstart = {
      init: function() {
        this.defineOriginPolyfill();
        this.retrieveAppConfig(this, window.location.hostname);
      },

      /**
       * polyfill for IE window.location.origin
       */
      defineOriginPolyfill: function() {
        if (!window.location.origin) {
          window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
        }
      },

      /**
       * add the link import of the right brand
       */
      importSharedStyles: function() {
        // include shared styles (THEME)
        if (window.CONFIG.AVAILABLE_BRANDS[CONFIG.SELECTED_BRAND]) {
          var brandObj = CONFIG.AVAILABLE_BRANDS[CONFIG.SELECTED_BRAND];
          var brand = brandObj.label.toLowerCase();
          var themeUrl = '/src/themes/' + brand + '.html';
          var themeImport = document.createElement('link');
          themeImport.setAttribute("rel", "import");
          themeImport.setAttribute("href", themeUrl);
          document.head.appendChild(themeImport);
        }
      },

      /**
       * add the link import of the dorel-app webcomponent
       */
      importDorelApp: function() {
        var dorelAppImport = document.createElement('link');
        dorelAppImport.setAttribute("rel", "import");
        dorelAppImport.setAttribute("href", "/src/dorel-app.html");
        document.head.appendChild(dorelAppImport);
      },

      retrieveAppConfig: function(context, domain) {
        // load site config
        fetch('https://api.dorel.io/v1/polymer/config?domain=' + domain, {
          method: 'get'
        })
        .then(function(res) {
          return res.json();
        })
        .then(function(response) {
          // set the responded config to the window CONFIG
          window.CONFIG = response;

          // apply shared styles
          context.importSharedStyles();

          // add the dorel app webcomponent
          // context.importDorelApp();
        })
        .catch(function() {
          if (domain !== 'default') {
            context.retrieveAppConfig(context, 'default');
          } else {
            console.error('DIO: no default fallback is defined in the GMT');
          }
        });
      }
    };

    dorelKickstart.init();
