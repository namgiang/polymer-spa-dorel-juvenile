/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

'use strict';

const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const mergeStream = require('merge-stream');
const polymerBuild = require('polymer-build');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

const swPrecacheConfig = require('./sw-precache-config.js');
const polymerJson = require('./polymer.json');
const polymerProject = new polymerBuild.PolymerProject(polymerJson);

/**
 * Waits for the given ReadableStream
 */
function waitFor(stream) {
  return new Promise((resolve, reject) => {
    stream.on('end', resolve);
    stream.on('error', reject);
  });
}

gulp.task('build:es5', function () {
  return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars

    const buildDirectory = 'build/es5';

    // Lets create some inline code splitters in case you need them later in your build.
    let sourcesStreamSplitter = new polymerBuild.HtmlSplitter();
    let dependenciesStreamSplitter = new polymerBuild.HtmlSplitter();

    // Okay, so first thing we do is clear the build directory
    console.log(`Deleting ${buildDirectory} directory...`);
    del([buildDirectory])
      .then(() => {

        // Let's start by getting your source files. These are all the files
        // in your `src/` directory, or those that match your polymer.json
        // "sources"  property if you provided one.
        let sourcesStream = polymerProject.sources()

          // If you want to optimize, minify, compile, or otherwise process
          // any of your source code for production, you can do so here before
          // merging your sources and dependencies together.
          .pipe(gulpif(/\.(png|gif|jpg|svg)$/, imagemin()))

          // The `sourcesStreamSplitter` created above can be added here to
          // pull any inline styles and scripts out of their HTML files and
          // into seperate CSS and JS files in the build stream. Just be sure
          // to rejoin those files with the `.rejoin()` method when you're done.
          .pipe(sourcesStreamSplitter.split())

          .pipe(gulpif(/\.css$/, cleanCSS()))
          .pipe(gulpif(/\.html$/, htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            uglifyJS: true
          })))
          .pipe(gulpif(/\.js$/, babel()))
          .pipe(gulpif(/\.js$/, uglify()))

          // Uncomment these lines to add a few more example optimizations to your source files.
          // .pipe(gulpif(/\.js$/, uglify())) // Install gulp-uglify to use
          // .pipe(gulpif(/\.css$/, cssSlam())) // Install css-slam to use
          // .pipe(gulpif(/\.html$/, htmlMinifier())) // Install gulp-html-minify to use

          // Remember, you need to rejoin any split inline code when you're done.
          .pipe(sourcesStreamSplitter.rejoin());


        // Similarly, you can get your dependencies seperately and perform
        // any dependency-only optimizations here as well.
        let dependenciesStream = polymerProject.dependencies()
          .pipe(dependenciesStreamSplitter.split())

          // Add any dependency optimizations here.
          .pipe(gulpif(/\.css$/, cleanCSS()))
          .pipe(gulpif(/\.html$/, htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            uglifyJS: true
          })))
          .pipe(gulpif(/\.js$/, babel()))
          .pipe(gulpif(/\.js$/, uglify()))

          .pipe(dependenciesStreamSplitter.rejoin());


        // Okay, now let's merge your sources & dependencies together into a single build stream.
        let buildStream = mergeStream(sourcesStream, dependenciesStream)
          .once('data', () => {
            console.log('Analyzing build dependencies...');
          });

        // If you want bundling, pass the stream to polymerProject.bundler.
        // This will bundle dependencies into your fragments so you can lazy
        // load them.
        buildStream = buildStream.pipe(polymerProject.bundler());
        
        buildStream = buildStream.pipe(polymerProject.addCustomElementsEs5Adapter())

        // Okay, time to pipe to the build directory
        buildStream = buildStream.pipe(gulp.dest(buildDirectory));

        // waitFor the buildStream to complete
        return waitFor(buildStream);
      })
      .then(() => {
        // Okay, now let's generate the Service Worker
        console.log('Generating the Service Worker...');
        return polymerBuild.addServiceWorker({
          project: polymerProject,
          buildRoot: buildDirectory,
          bundled: true,
          swPrecacheConfig: swPrecacheConfig
        });
      })
      .then(() => {
        // You did it!
        console.log('Build complete!');
        resolve();
      });
  });
});

gulp.task('build:es6', function(done) {
    gulp.src('./**/*')
    .pipe(gulp.dest('build/es6'))
    .on('end', () => console.log('Copied files to build/es6'));
    done();
});