/**
 * tasks/serve
 */
'use strict'

const gulp = require('gulp')
const path = require('./boost')
const bs = require('browser-sync')

const reload = bs.reload

module.exports = gulp.task('serve', () => {
  bs({
    open: false,
    notify: false,
    server: {
      baseDir: './src',
      middleware: (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        next()
      }
    }
  })
})

module.exports = gulp.task('watch', () => {
  gulp.watch('./src/assets/components', ['process:bower', reload])
  gulp.watch(['**/*.js', '!**/*.min.js'], {cwd: path.scripts.watch}, ['process:js', reload])
  gulp.watch('**/*.styl', {cwd: path.styl.watch}, ['process:styl', reload])
  gulp.watch('**/*.pug', {cwd: path.pug.watch}, ['process:pug', reload])
})

module.exports = gulp.task('watch:js', () => {
  gulp.watch(['**/*.js', '!**/*.min.js'], {cwd: path.scripts.watch}, ['process:js'])
})

module.exports = gulp.task('watch:pug', () => {
  gulp.watch('**/*.pug', {cwd: path.pug.watch}, ['process:pug'])
})

module.exports = gulp.task('watch:styl', () => {
  gulp.watch('**/*.styl', {cwd: path.styl.watch}, ['process:styl'])
})

module.exports = gulp.task('watch:components', () => {
  gulp.watch('./src/assets/components', ['process:bower'])
})

module.exports = gulp.task('watch:assets', ['watch:js', 'watch:pug', 'watch:styl', 'watch:components'])
