/**
 * Gmaps Helpers
 */
(function () {
  'use strict'

  var styles = [
    /**
     * Typography
     */
    {
      'featureType': 'all',
      'elementType': 'labels',
      'stylers': [
        {'visibility': 'on'}
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels.text.fill',
      'stylers': [
        {'saturation': 36},
        {'color': '#ffffff'},
        {'lightness': 40}
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {'visibility': 'on'},
        {'color': '#34495e'},
        {'lightness': 16}
      ]
    },

    /**
     * Icons
     */
    {
      'featureType': 'all',
      'elementType': 'labels.icon',
      'stylers': [
        {'visibility': 'off'}
      ]
    },
    /*
     * Administrative lines
     */
    {
      'featureType': 'administrative',
      'elementType': 'geometry.fill',
      'stylers': [
        {'color': '#e9e9e9'},
        {'lightness': 20}
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.stroke',
      'stylers': [
        {'color': '#e9e9e9'},
        {'lightness': 17},
        {'weight': 1.2}
      ]
    },
    {
      'featureType': 'administrative.country',
      'elementType': 'labels.text.fill',
      'stylers': [
        {'color': '#34495e'}
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text.fill',
      'stylers': [
        {'color': '#fff'}
      ]
    },
    {
      'featureType': 'administrative.neighborhood',
      'elementType': 'labels.text.fill',
      'stylers': [
        {'color': '#34495e'}
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'geometry',
      'stylers': [
        {'color': '#c9c9c9'},
        // {'color': '#34495e'},
        {'saturation': -45},
        {'lightness': 20}
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {'color': '#34495e'},
        {'lightness': 21},
        {'visibility': 'on'}
      ]
    },
    {
      'featureType': 'poi.business',
      'elementType': 'geometry',
      'stylers': [
        {'visibility': 'on'}
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry',
      'stylers': [
        {'visibility': 'on'}
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {'visibility': 'simplified'},
        {'color': '#34495e'}
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.fill',
      'stylers': [
        {'color': '#333333'},
        {'lightness': '0'}
      ]
    },
    // {
    //   'featureType': 'road.highway',
    //   'elementType': 'geometry.stroke',
    //   'stylers': [
    //     {'visibility': 'off'}
    //   ]
    // },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.fill',
      'stylers': [
        {'color': '#ffffff'}
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {'color': '#34495e'},
        // {'visibility': 'off'}
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry',
      'stylers': [
        {'color': '#34495e'},
        {'lightness': 18}
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry.fill',
      'stylers': [
        {'hue': '#34495e'}
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'labels.text.fill',
      'stylers': [
        {'color': '#ffffff'}
      ]
    },
    // {
    //   'featureType': 'road.arterial',
    //   'elementType': 'labels.text.stroke',
    //   'stylers': [
    //     {'color': '#2c2c2c'}
    //   ]
    // },
    {
      'featureType': 'road.local',
      'elementType': 'geometry',
      'stylers': [
        {'color': '#34495e'},
        {'lightness': 16}
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'labels.text.fill',
      'stylers': [
        {'color': '#ffffff'}
      ]
    },
    // {
    //   'featureType': 'transit',
    //   'elementType': 'geometry',
    //   'stylers': [
    //     {'color': '#000000'},
    //     {'lightness': 19}
    //   ]
    // },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {'color': '#4a82bb'},
        {'lightness': 17}
      ]
    }
  ]

  var GMaps = window.GMaps

  var gmaps = new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333,
    styles: styles,
    mapTypeControl: false,
    scrollwheel: false,
    scaleControl: false
  })

  function _geocode (results, status) {
    if (status !== 'OK') {
      throw new Error('GMaps cannot track the address!')
    }

    var latlng = results[0].geometry.location

    gmaps.setCenter(latlng.lat(), latlng.lng())
    gmaps.addMarker({
      lat: latlng.lat(),
      lng: latlng.lng(),
      icon: 'assets/images/pin.png'
    })
  }

  function maps (addr) {
    GMaps.geocode({
      address: addr,
      callback: _geocode
    })
  }

  window.aloha = window.aloha || {}
  window.aloha.maps = maps
})(window, document, window.jQuery)
