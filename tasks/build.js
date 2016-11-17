/**
 * tasks/build
 */
'use strict'

const gulp = require('gulp')
const path = require('./boost')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const cssmin = require('gulp-cssmin')

module.exports = gulp.task('build', () => {
  gulp.src(['fonts/**'], {cwd: './src/assets'})
    .pipe(gulp.dest('./dist/assets/fonts'))

  gulp.src(['images/**'], {cwd: './src/assets'})
    .pipe(gulp.dest('./dist/assets/images'))

  gulp.src(path.scripts.min)
    .pipe(uglify())
    .pipe(gulp.dest(path.scripts.compiled))

  gulp.src('*.css', {cwd: path.styl.dist})
    .pipe(cssmin())
    .pipe(gulp.dest(path.styl.compiled))

  gulp.src('*.html', {cwd: path.pug.dist})
    .pipe(htmlmin({
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    }))
    .pipe(gulp.dest(path.pug.compiled))
})
