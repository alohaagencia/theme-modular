/**
 * tasks/pug
 */
'use strict'

const gulp = require('gulp')
const path = require('./boost').pug
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const pug = require('gulp-pug')

module.exports = gulp.task('process:pug', () => {
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
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.dist))
})
