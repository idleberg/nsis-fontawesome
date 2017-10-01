/**
 *  nsis-fontawesome
 *  https://github.com/idleberg/nsis-fontawesome
 *
 *  Copyright (c) 2017 Jan T. Sott
 *  Licensed under the MIT license.
 */

const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const { readFileSync, writeFileSync } = require('fs');
const woff2 = require('woff2');

// Source Files
const cssFiles = [
  './css/fontawesome.css'
];

const fontFiles = [
  './fonts/*.*'
];

// Tasks
gulp.task('build:css', gulp.series(function(done) {
  gulp.src(cssFiles)
  .pipe(concat('fontawesome.min.css'))
  .pipe(cssnano())
  .pipe(gulp.dest('./css'));

  done();
}));

gulp.task('build:woff2', gulp.series(function(done) {
  const input = readFileSync('./fonts/fontawesome.ttf');
  writeFileSync('./fonts/fontawesome.woff2', woff2.encode(input));

  done();
}));

gulp.task('build', gulp.parallel('build:css', 'build:woff2'));
