/**
 * tasks/scripts
 */
'use strict'

const gulp = require('gulp')
const path = require('./boost').scripts
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')

module.exports = gulp.task('process:js', () => {
  let err = function (err) {
    notify.onError({
      title: 'Gulp',
      subtitle: 'Failure!',
      message: 'Error: <%= error.message %>',
      sound: 'Beep'
    })(err)

    this.emit('end')
  }

  gulp.src(path.src)
    .pipe(plumber({errorHandler: err}))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.dist))
})
