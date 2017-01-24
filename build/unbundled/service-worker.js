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

var precacheConfig = [["/assets/cdn/theme-dorel-shared-styles.html","6663623714b82e9f9ebf4ba1f4d70339"],["/assets/cdn/theme-maxicosi-shared-styles.html","dbd5633d167624f69ce4e1eb4aac0b77"],["/assets/css/styles.css","40073b90c75fccd0c04181988fd54612"],["/assets/images/_OLD/branded-example-image.jpg","0744e114e2bfbbc377d55eaf39ff9f51"],["/assets/images/_OLD/child-father-boat.jpg","23f8c544fea7e6194de8005dc3af3d36"],["/assets/images/_OLD/child-father-fly.jpg","96f63e63fb9a432a25b9fb3b2c8bd3a1"],["/assets/images/_OLD/child-superhero.jpg","bd152482cbd38b898a3a7c99e693f1b1"],["/assets/images/_OLD/office-space-2.jpg","eddf9f71a62847c658b13eab54e86fa5"],["/assets/images/_OLD/office-space-4.jpg","3adb74e46159f69e78b104e99d0ea510"],["/assets/images/_OLD/office-space-6.jpg","df6e575e9b3e48147a47650280015f05"],["/assets/images/_OLD/office-space.jpg","df981fce6ac9b9099981b85552b24f2e"],["/assets/images/_OLD/temp_maxicosi_mura-plus-transparent.png","d290831a0551436c8880208d3b678a5e"],["/assets/images/branded-example-image.jpg","e5a61b585948902162a7b9b2f9d14f6e"],["/assets/images/child-father-boat.jpg","e88b948b0139be3ba39f86e3ab87b344"],["/assets/images/child-father-fly.jpg","81054971694270615bb50c9fe4813f7b"],["/assets/images/child-pilot.jpg","225bd16506c1b4a508dabe0cf0bc45b3"],["/assets/images/child-superhero.jpg","c2ed079e4f89390854f028b97fe62035"],["/assets/images/dorel.svg","c0839a4229c0de9ae3c5352d3fe883b1"],["/assets/images/manifest/icon-144x144.png","3b339262d2ca82c5ad688b2972f35ecb"],["/assets/images/manifest/icon-192x192.png","7b7162f40bf4876a1e5bbf40dc8b1399"],["/assets/images/manifest/icon-48x48.png","d2d1b3be3caa2a4ec382cc7566378168"],["/assets/images/manifest/icon-512x512.png","8abae22f25ae3771d0973ba79d602ef7"],["/assets/images/manifest/icon-72x72.png","9fabe2b23cadf6eba9d6077e7b902f32"],["/assets/images/manifest/icon-96x96.png","5df0be2470b6378e7c116bcf43774292"],["/assets/images/office-space-2.jpg","bd40c838acd744c53ebc8f0d45d67fb7"],["/assets/images/office-space-4.jpg","3067b7deb18dd00ba493809d35a68b58"],["/assets/images/office-space-6.jpg","3e308da781191ed6b3a143c4b2a03d55"],["/assets/images/office-space.jpg","fd3c114b7242f1dd0f13b155a6d4af3b"],["/assets/images/temp-stroller-red.png","680f580cdba72c52afc375c111aad9b7"],["/assets/images/temp_maxicosi_mura-plus-transparent.jpg","c6ab3b57cfa658f672a5eeb4027d1bfb"],["/assets/images/temp_maxicosi_mura-plus-transparent.png","d368dfbd6f98c646436a1b38af996360"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","0916d57aa30b3c1b54946399c8c01f04"],["/bower_components/app-layout/app-header/app-header.html","c6e2d544cf93aa6258ef9ca82baaea6d"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","3007817ffcb7fd1cf6528305c0fec9ff"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bde0a79d3265bef565ee86c699b6bbae"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/app-route/app-location.html","0c082f44abb664591f5b99e57a3855e6"],["/bower_components/app-route/app-route-converter-behavior.html","3b85a02b434cbccdcb87396be3554258"],["/bower_components/app-route/app-route.html","ee6897a01647904badcc856c1a4cb6ec"],["/bower_components/iron-flex-layout/iron-flex-layout-classes.html","90471c0acb830c41b01e02a2507bed3c"],["/bower_components/iron-flex-layout/iron-flex-layout.html","3987521c615734e4fe403f9acecfea54"],["/bower_components/iron-location/iron-location.html","0ca9fd93d23992a9340ce7c433557226"],["/bower_components/iron-location/iron-query-params.html","32a96be5536aea89a925d16146cb7015"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","d0eb39331820f58f3cdcebaa0eed0209"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/polymer-global-variables/dist/polymer-global-variables.js","f7ef5d9ae34efbbc13011817ae51f569"],["/bower_components/polymer/polymer-micro.html","c8afdb92849d162268e7cc58eff5cd57"],["/bower_components/polymer/polymer-mini.html","33af9817ee3946c225d038f5a04d276a"],["/bower_components/polymer/polymer.html","186cfd0bba3b39fd262e69dc7bcc699a"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","02395895d5d08242c6ba93518a6da2c5"],["/index.html","3f241af5735e2025113985e594425831"],["/src/atoms/dorel-animate-classes.html","be33e2016475da56918cf37774747334"],["/src/atoms/dorel-back-to-top.html","3ca734b3fc419036eaa4328bf6921e27"],["/src/atoms/dorel-content-wrapper.html","086169725c2e5f8688790ecfb7258ecc"],["/src/atoms/dorel-cta.html","dcbcbeed22af018dc9d7c036d084b264"],["/src/atoms/dorel-gtm-data-layer.html","5fbac02e7cf7367c3292ad32e7e79b9f"],["/src/atoms/dorel-icons.html","c0611d6596889559a7ca8306b91f5c09"],["/src/atoms/dorel-iconset-simple.html","325d8a2feaca5f235c082028dcefdb27"],["/src/atoms/dorel-next-section.html","1e53cca12de2d5b3d61943d62f4a67e9"],["/src/atoms/dorel-ripple-container.html","3c7bd8d8e663664e54532499af9268d4"],["/src/atoms/dorel-safe-html.html","ae6d016d6c48acc409761295263e9b70"],["/src/atoms/dorel-shared-styles.html","9a6b3a618fe9c272cd2b805e7b63dade"],["/src/atoms/dorel-snackbar.html","00f1794815dc1a0d0cd671c0f1f34eff"],["/src/atoms/dorel-tabs-overlay.html","11f11cc21de8e4d505b98ba688b328b0"],["/src/dorel-app-placeholder.html","df76a95eee5ae14e900e876dda855fe5"],["/src/dorel-app-resources.html","0a2747fa9672fd80526160cc3f5dfe59"],["/src/dorel-app.html","80a498e4d1106745a93822e1704652b6"],["/src/molecules/dorel-button.html","138802397950bf1bf157bcc2ba3082ad"],["/src/molecules/dorel-card-contact.html","ab23f4794199c5254b68e695f4cc18b5"],["/src/molecules/dorel-card.html","769cbd8e9ce53ffcbed6c20dab3c0d2a"],["/src/molecules/dorel-logo.html","3e6fe905900a9ce947acc90938d33db3"],["/src/molecules/dorel-menu-products.html","cfd0d1993e385b9b499e9c1953361959"],["/src/molecules/dorel-search-small.html","1b39c79d42b27a07cf695b2883740d44"],["/src/molecules/dorel-select-language.html","5c9c6b34078d1ecf84c87ed310275e62"],["/src/molecules/dorel-tab.html","9c8b3add44ad29f76f60abdc7df93245"],["/src/molecules/dorel-tabs.html","9bff7c65d11bccfcbf72b0c72856abda"],["/src/molecules/dorel-wp-collect-menu.html","c142a8d1fa62271e96d8b43737f5b3bf"],["/src/molecules/dorel-wp-collect-page.html","f65cd5ec7a9592dff39b1927b44a4108"],["/src/molecules/dorel-wp-collect-pages.html","d1222f48a065eef24b9ed985f0e7cb5d"],["/src/organisms/dorel-column-content.html","f33415551c99c14b75c0d41ee9c1f3c7"],["/src/organisms/dorel-footer.html","f53556114c324f116e457f0634e2ec56"],["/src/organisms/dorel-hero-column.html","3db1018f781eb31b2482eb847797f70d"],["/src/organisms/dorel-hero.html","19058ea299bc86890820a601ab810506"],["/src/organisms/dorel-layout-section-column.html","31ab347c8b823c7117e0e6ad0c03657f"],["/src/organisms/dorel-layout-section.html","77b49916555a25139b2289b650528641"],["/src/organisms/dorel-network-warning.html","83b4ba9e7661f7917f160aaf49aa6b9a"],["/src/organisms/dorel-page-builder.html","349b994019159ab94cb2f303c653e274"],["/src/organisms/dorel-section-standout.html","91e8be9c4f7d4692c37cfc96df469fb3"],["/src/organisms/dorel-slider-slide.html","a82576c6ad06bedb8105a5cadff74728"],["/src/organisms/dorel-slider.html","b100779ed3fa3eb5aa0cc54c4e5c59fb"],["/src/templates/dorel-404.html","a49ba5a84b37cd9906baa1ca23b54005"],["/src/templates/dorel-template-home.html","6c557cb8f347cdc2138bc6e422f3fbca"],["/src/templates/dorel-template-info.html","76aa376b0987f7f616c88cc6dc9d4efa"],["/src/templates/dorel-template-marketing.html","e4d12c84054380b7df9aea7cf821dfc5"],["/src/templates/dorel-template.html","54fb682c5704a304e72e96eed63d31fa"]];
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







