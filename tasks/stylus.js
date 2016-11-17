/**
 * task/stylus
 */
'use strict'

const gulp = require('gulp')
const path = require('./boost').styl
const styl = require('gulp-stylus')
const rupture = require('rupture')
const kouto = require('kouto-swiss')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')

module.exports = gulp.task('process:styl', () => {
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
    .pipe(styl({
      'hoist atrules': true,
      use: [rupture(), kouto()]
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.dist))
})
