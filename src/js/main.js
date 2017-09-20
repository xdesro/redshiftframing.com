// import status from './test';
import $ from 'jquery';
import GoogleMapsLoader from 'google-maps';

// (() => {
//     console.log(`Test:${status()}`);
// })();

$('.navbar-burger').on('click', function() {
    $(this).toggleClass('is-active');
    $(this).closest('nav').toggleClass('frosty');
    const target = $(this).data('target');
    $('#' + target).toggleClass('is-active');
});

GoogleMapsLoader.KEY = 'AIzaSyCMrn3LCibt7BGc6DybsmAhKP0HDssXOcM';
GoogleMapsLoader.load(function(google) {
    const redshift = {
        lat: 39.7393891,
        lng: -105.044711
    }
    const map = new google.maps.Map(document.getElementById('map'), {
        center: redshift,
        zoom: 17,
        navigationControl: false,
        draggable: false,
        scaleControl: false,
        disableDefaultUI: true,
        styles: [{
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'saturation': 36
            }, {
                'color': '#000000'
            }, {
                'lightness': 40
            }]
        }, {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#000000'
            }, {
                'lightness': 16
            }]
        }, {
            'featureType': 'all',
            'elementType': 'labels.icon',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 20
            }]
        }, {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 17
            }, {
                'weight': 1.2
            }]
        }, {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 20
            }]
        }, {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 21
            }]
        }, {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 17
            }]
        }, {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 29
            }, {
                'weight': 0.2
            }]
        }, {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 18
            }]
        }, {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 16
            }]
        }, {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 19
            }]
        }, {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 17
            }]
        }]
    });
    new google.maps.Marker({
        position: redshift,
        map: map
    })
});
