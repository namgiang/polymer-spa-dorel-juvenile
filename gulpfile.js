'use strict';

/**
 * Load Deps
 */
var gulp  = require('gulp');
var shell = require('gulp-shell');

/**
 * Task for building polymer
 */
gulp.task('build-polymer', shell.task([
    'polymer build'
]));

/**
 * Task building service worker
 */
gulp.task('generate-service-worker', ['build-polymer'],function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = './build/unbundled';
  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir
  }, callback);
});

/**
 * Generate all (this script should run)
 */
gulp.task('build', ['build-polymer', 'generate-service-worker']);