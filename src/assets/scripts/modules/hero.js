/**
 * Hero JS
 */
(function (window, document, $) {
  'use strict'

  function _controls (controls, carousel) {
    if (!controls.prev.length && !controls.next.length) {
      return
    }

    controls.prev.on('click', function (event) {
      event.preventDefault()
      return carousel.trigger('owl.prev')
    })

    controls.next.on('click', function (event) {
      event.preventDefault()
      return carousel.trigger('owl.next')
    })
  }

  function hero (container, options, controls) {
    if (!container.length) {
      return
    }

    var carousel = container.owlCarousel(options)
    return _controls(controls, carousel)
  }

  window.aloha = window.aloha || {}
  window.aloha.hero = hero
})(window, document, window.jQuery)
