/**
 * Home
 *
 * Arquivos de javascript da home
 */

/**
 * Main Banner
 */
var $ = window.jQuery

var options = {
  singleItem: true,
  pagination: false,
  stopOnHover: true,
  transitionStyle: 'fade',
  autoHeight: true
}

window.aloha.hero($('.hero-carousel'), options, {
  prev: $('.hero-controls .prev'),
  next: $('.hero-controls .next')
})
