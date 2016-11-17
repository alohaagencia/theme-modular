/**
 * tasks/deploy
 */
'use strict'

const gulp = require('gulp')
const zip = require('gulp-zip')
const rsync = require('rsyncwrapper')
const options = require('./boost').sync
let version = require('../package.json').version

module.exports = gulp.task('version', () => {
  version = version || '0.1.0'

  gulp.src(['./dist/**', '!./dist/*.zip'])
    .pipe(zip(version + '.zip'))
    .pipe(gulp.dest('./dist'))
})

module.exports = gulp.task('deploy', ['version'], () => {
  rsync(options, (error, stdout, stderr, cmd) => {
    if (error) {
      console.log('Error: ' + error.message)
    } else {
      console.log('Successfully deployed files')
    }
  })
})
