'use strict';

/**
 * Load Deps
 */
var gulp = require('gulp');
var shell = require('gulp-shell');
var imagemin = require('gulp-imagemin');

/**
 * Compress images
 */
gulp.task('compress-images', function () {
  var dest = './build/assets/img';

  return gulp.src('./assets/images/*')
          .pipe(imagemin())
          .pipe(gulp.dest('./assets/images/'));
});

/**
 * Task for building polymer
 */
gulp.task('build-polymer', shell.task([
  'polymer build --add-service-worker --add-push-manifest --insert-prefetch-links --js-minify --css-minify --html-minify --js-compile --name unbundled'
]));

/**
 * Generate all (this script should run)
 */
gulp.task('build', ['compress-images', 'build-polymer']);