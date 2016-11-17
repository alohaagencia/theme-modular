/**
 * Gulpfile.js
 */
'use strict'

const gulp = require('gulp')
const fs = require('fs')
const path = require('path')
const tasks = fs.readdirSync('./tasks')

tasks.forEach(task => {
  require(path.join(__dirname, 'tasks', task))
})

gulp.task('process', [
  'process:bower',
  // 'process:pug',
  'process:styl',
  'process:js'
])

gulp.task('default', ['process', 'serve', 'watch'])
