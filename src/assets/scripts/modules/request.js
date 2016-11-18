/**
 * Module Request
 */
(function (window, document, $) {
  'use strict'

  function request (url, data) {
    return $.get(url, data)
  }

  window.aloha = window.aloha || {}
  window.aloha.request = request
})(window, document, window.jQuery)
