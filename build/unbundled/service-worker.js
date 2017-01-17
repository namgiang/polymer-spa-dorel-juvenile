/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/assets/cdn/theme-dorel-shared-styles.html","6663623714b82e9f9ebf4ba1f4d70339"],["/assets/cdn/theme-maxicosi-shared-styles.html","dbd5633d167624f69ce4e1eb4aac0b77"],["/assets/css/styles.css","40073b90c75fccd0c04181988fd54612"],["/assets/images/_OLD/branded-example-image.jpg","0744e114e2bfbbc377d55eaf39ff9f51"],["/assets/images/_OLD/child-father-boat.jpg","23f8c544fea7e6194de8005dc3af3d36"],["/assets/images/_OLD/child-father-fly.jpg","96f63e63fb9a432a25b9fb3b2c8bd3a1"],["/assets/images/_OLD/child-superhero.jpg","bd152482cbd38b898a3a7c99e693f1b1"],["/assets/images/_OLD/office-space-2.jpg","eddf9f71a62847c658b13eab54e86fa5"],["/assets/images/_OLD/office-space-4.jpg","3adb74e46159f69e78b104e99d0ea510"],["/assets/images/_OLD/office-space-6.jpg","df6e575e9b3e48147a47650280015f05"],["/assets/images/_OLD/office-space.jpg","df981fce6ac9b9099981b85552b24f2e"],["/assets/images/_OLD/temp_maxicosi_mura-plus-transparent.png","d290831a0551436c8880208d3b678a5e"],["/assets/images/branded-example-image.jpg","e5a61b585948902162a7b9b2f9d14f6e"],["/assets/images/child-father-boat.jpg","e88b948b0139be3ba39f86e3ab87b344"],["/assets/images/child-father-fly.jpg","81054971694270615bb50c9fe4813f7b"],["/assets/images/child-pilot.jpg","225bd16506c1b4a508dabe0cf0bc45b3"],["/assets/images/child-superhero.jpg","c2ed079e4f89390854f028b97fe62035"],["/assets/images/dorel.svg","c0839a4229c0de9ae3c5352d3fe883b1"],["/assets/images/manifest/icon-144x144.png","3b339262d2ca82c5ad688b2972f35ecb"],["/assets/images/manifest/icon-192x192.png","7b7162f40bf4876a1e5bbf40dc8b1399"],["/assets/images/manifest/icon-48x48.png","d2d1b3be3caa2a4ec382cc7566378168"],["/assets/images/manifest/icon-512x512.png","8abae22f25ae3771d0973ba79d602ef7"],["/assets/images/manifest/icon-72x72.png","9fabe2b23cadf6eba9d6077e7b902f32"],["/assets/images/manifest/icon-96x96.png","5df0be2470b6378e7c116bcf43774292"],["/assets/images/office-space-2.jpg","bd40c838acd744c53ebc8f0d45d67fb7"],["/assets/images/office-space-4.jpg","3067b7deb18dd00ba493809d35a68b58"],["/assets/images/office-space-6.jpg","3e308da781191ed6b3a143c4b2a03d55"],["/assets/images/office-space.jpg","fd3c114b7242f1dd0f13b155a6d4af3b"],["/assets/images/temp-stroller-red.png","680f580cdba72c52afc375c111aad9b7"],["/assets/images/temp_maxicosi_mura-plus-transparent.jpg","c6ab3b57cfa658f672a5eeb4027d1bfb"],["/assets/images/temp_maxicosi_mura-plus-transparent.png","d368dfbd6f98c646436a1b38af996360"],["/bower_components/app-layout/app-drawer/app-drawer.html","687ac17c2c0adca1adc4031ec5d2f335"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","0916d57aa30b3c1b54946399c8c01f04"],["/bower_components/app-layout/app-header/app-header.html","c6e2d544cf93aa6258ef9ca82baaea6d"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","3007817ffcb7fd1cf6528305c0fec9ff"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bde0a79d3265bef565ee86c699b6bbae"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/app-route/app-location.html","0c082f44abb664591f5b99e57a3855e6"],["/bower_components/app-route/app-route-converter-behavior.html","3b85a02b434cbccdcb87396be3554258"],["/bower_components/app-route/app-route.html","ee6897a01647904badcc856c1a4cb6ec"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/google-tag-manager/google-tag-manager.html","c052eb0141b685a56c76798add56be53"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","a3bd031e39dde38cb8e619f670ee50f7"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","c4c3d44402c9d456c38c14da04d206b9"],["/bower_components/iron-ajax/iron-ajax.html","d606b330d7bd040660a53a5cda7f8acf"],["/bower_components/iron-ajax/iron-request.html","c2d289c4b20653353cff315cf247a45e"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","fe09653502aaa6271d6ba8533de60f22"],["/bower_components/iron-dropdown/iron-dropdown.html","0c8c3226b6e6a351b098fa4d794ee702"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","8d3799ca2f619ed4f31261bb03284671"],["/bower_components/iron-flex-layout/iron-flex-layout-classes.html","90471c0acb830c41b01e02a2507bed3c"],["/bower_components/iron-flex-layout/iron-flex-layout.html","3987521c615734e4fe403f9acecfea54"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-form/iron-form.html","d567cf610fac57ae3c30af80c5400750"],["/bower_components/iron-icon/iron-icon.html","f2a0dfd0b79864b4f4efb578417a3fef"],["/bower_components/iron-icons/editor-icons.html","0f06130b4e9fa1761ae2bc9e2f1f10d3"],["/bower_components/iron-icons/hardware-icons.html","ff29c05b924ec665bd07449d0a8bc762"],["/bower_components/iron-icons/iron-icons.html","224dfbc53cf908d9ae68da954ca2d8e9"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8d0d7213b8c3325ca7e5a658ca9aaf17"],["/bower_components/iron-image/iron-image.html","72175f3ce2bc8e6bf3436ab8749b470e"],["/bower_components/iron-input/iron-input.html","3e393eda6c241be2817ce0acc512bcf6"],["/bower_components/iron-location/iron-location.html","0ca9fd93d23992a9340ce7c433557226"],["/bower_components/iron-location/iron-query-params.html","7ad9dd317846ada511fc228fa4d02f87"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","d3f30152b76f2fa27e02739a99060a29"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-focusables-helper.html","1607d4d8a7d922ade7894167368ccc31"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","35013b4b97041ed6b63cf95dbb9fbcb4"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","9e9090df0515a2c8b755bd9c2e944b45"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","7f741ba06ffd837bf1697e8778b94731"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","d0eb39331820f58f3cdcebaa0eed0209"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/opaque-animation.html","8e2f63bbc648796f3ed96834a5553d07"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-card/paper-card.html","d16397757d387d8d095e5a85f5b016ab"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","d309383cfdcf6733d4e6827c3b877c72"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","c18c68e91e13e2102f577c1c55ce7598"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu.html","976f0cb55bd9810af92f7aa9d20456ae"],["/bower_components/paper-icon-button/paper-icon-button.html","2a75de00f858ae1e894ab21344464787"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","3960579058d3ba0a74ae7b67b78f53c2"],["/bower_components/paper-input/paper-input-char-counter.html","94c2003f281325951e3bf5b927a326bb"],["/bower_components/paper-input/paper-input-container.html","0ddbde66d15452d5bdec103ef876e5af"],["/bower_components/paper-input/paper-input-error.html","b90f3a86d797f1bdbbb4d158aeae06ab"],["/bower_components/paper-input/paper-input.html","3385511052db3467ca6ec155faa619ad"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-shared-styles.html","31466267014182098267f1b9303f656e"],["/bower_components/paper-item/paper-item.html","e614731572c425b144aa8a9da24ee3ea"],["/bower_components/paper-listbox/paper-listbox.html","bfbc631d72b3e7b2b611c9a32430e3c6"],["/bower_components/paper-material/paper-material-shared-styles.html","d0eeeb696e55702f3a38ef1ad0058f59"],["/bower_components/paper-material/paper-material.html","47301784c93c3d9989abfbab68ec9859"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","a6d6ed67a145ca00d4487c40c4b06273"],["/bower_components/paper-menu-button/paper-menu-button.html","2b2f79e8b3b50e4aabd2dd3ada9b6814"],["/bower_components/paper-ripple/paper-ripple.html","e22bc21b61184cb28125d16f9d80fb59"],["/bower_components/paper-spinner/paper-spinner-behavior.html","82e814c4460e8803f6f57cc457658adf"],["/bower_components/paper-spinner/paper-spinner-lite.html","1f3147475d9a3446bc78cdb44103defa"],["/bower_components/paper-spinner/paper-spinner-styles.html","a2122d2c0f3ac98e6911160d8886d31a"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/shadow.html","fc449492f51292636b499bc5d7b9b036"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/polymer-simple-slider/simple-slider.html","f0f9e5fc6e7347227b75d0118e3a3a7b"],["/bower_components/polymer/polymer-micro.html","c8afdb92849d162268e7cc58eff5cd57"],["/bower_components/polymer/polymer-mini.html","33af9817ee3946c225d038f5a04d276a"],["/bower_components/polymer/polymer.html","186cfd0bba3b39fd262e69dc7bcc699a"],["/bower_components/promise-polyfill/Promise.js","5afb14fd81497aca81bf25929d65b02d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/simple-slider/src/simpleslider.js","8e6a4af21f2359726a87fba18748e725"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","04197e2ccec914fa460eef2ac140c853"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","02395895d5d08242c6ba93518a6da2c5"],["/index.html","2d7597e224bf5167b8f79cbdea784d34"],["/src/atoms/dorel-animate-classes.html","9ef7710c0500a641b3484e7fc7193ecd"],["/src/atoms/dorel-back-to-top.html","38d725adad73972cde6579e3bd94033e"],["/src/atoms/dorel-content-wrapper.html","2317c7fe3fcc0eb79147eab5eea45451"],["/src/atoms/dorel-cta.html","0b524c1ff934e36f63af1b00ab33069d"],["/src/atoms/dorel-icons.html","19f0b49e998533bdc605bcc8e7a87613"],["/src/atoms/dorel-iconset-simple.html","d3a612a6b06620aa67d51b24f3750567"],["/src/atoms/dorel-next-section.html","7dfb3b4a8d05159795873682dc8508dc"],["/src/atoms/dorel-ripple-container.html","b865cca92005d7c63786fa44e035336d"],["/src/atoms/dorel-safe-html.html","393606225a364f47d702ce4a328e2991"],["/src/atoms/dorel-shared-styles.html","18c79bd14436b5d7b6663294966177d9"],["/src/atoms/dorel-snackbar.html","26d2992651fa8d9c3a15b73795bc2805"],["/src/atoms/dorel-tabs-overlay.html","0795a8d7235e609ec24b9f1d1399d17a"],["/src/dorel-app.html","e4204f7b317f854a5bed5c8f3c72c630"],["/src/dorel-lazy-resources.html","4d0172c36440f055cc995b1e76fbc9d3"],["/src/molecules/dorel-button.html","e0698977aacf5d3dbbe3560c80a6c688"],["/src/molecules/dorel-card-contact.html","c439252c508f6fd2c01b7f34ef698bb1"],["/src/molecules/dorel-card.html","b9e2214136f8e3952c1079db53d2cc59"],["/src/molecules/dorel-logo.html","46c9679a0e46246b060d16aa55ad53d3"],["/src/molecules/dorel-menu-products.html","1097f79cc441a5b0821996dd207b4fc7"],["/src/molecules/dorel-search-small.html","d52af60c8ffa9aafb1551e75d015e9f9"],["/src/molecules/dorel-select-language.html","6788a3615667551eee67d435987a7d18"],["/src/molecules/dorel-tab.html","dec425670552f738a15a11dcb66564f2"],["/src/molecules/dorel-tabs.html","a6901df639ac63b175f23dd6d085c055"],["/src/molecules/dorel-wp-collect-menu.html","c46750604c29295ff2f260a6cec4bca1"],["/src/molecules/dorel-wp-collect-page.html","c62597b11417f838fd3772116278784e"],["/src/molecules/dorel-wp-collect-pages.html","1ba889ada897beafa8457ef0b1b615ae"],["/src/organisms/dorel-column-content.html","b839f21355fe92c48a701462ad894d44"],["/src/organisms/dorel-footer.html","584fd898cfa98e5c847f85ed4200870f"],["/src/organisms/dorel-hero-column.html","de1ca07e567845ab7a81e515bfea35bd"],["/src/organisms/dorel-hero.html","f79d188df7abc4ba246152f2878f3d4e"],["/src/organisms/dorel-layout-section-column.html","b218962360801371db9ba3e1decea09d"],["/src/organisms/dorel-layout-section.html","9e0b49f1c6edae07564279f7d290f88f"],["/src/organisms/dorel-network-warning.html","4632fac8c2d4ea467cd449c79673bc4d"],["/src/organisms/dorel-page-builder.html","2bd044249ec56f2ceda433d2a7647862"],["/src/organisms/dorel-section-standout.html","669a7c4948a4f0b8a0cb5cb5fdadebfe"],["/src/organisms/dorel-slider-slide.html","fc79c23576970a6bed4a353f367a08ff"],["/src/organisms/dorel-slider.html","af8a8aa79e44d53511a279b538bb6e37"],["/src/templates/dorel-404.html","0d19c387f731dcfe554a669ff9263801"],["/src/templates/dorel-template-home.html","ea66fcf05b7714c2964f70e989fba4db"],["/src/templates/dorel-template-info.html","2d4a3f0144cdb6c2a6cd3c882256ebef"],["/src/templates/dorel-template-marketing.html","5a2e4fdfbd61cd8d2ab57fbe1eda2f1d"],["/src/templates/dorel-template.html","c2b93b29a5e9165ebdb0c9172f2f6831"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







