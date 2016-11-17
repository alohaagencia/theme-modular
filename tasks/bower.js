/**
 * tasks/bower
 */
'use strict'

const gulp = require('gulp')
const path = require('./boost')
const bower = require('bower-files')()
const concat = require('gulp-concat')

module.exports = gulp.task('process:bower', () => {
  gulp.src(bower.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(path.scripts.dist))

  gulp.src(bower.ext('css').files)
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest(path.styl.dist))
})
