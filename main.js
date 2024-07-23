let latitude, longitude, destination;

$(document).ready(function () {
    alert("Please allow the device to know your location!")
    initGeolocation();
})

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})

function initGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success);
    }
    else{
        alert("Sorry, Your Browser does not support Geolocation.")
    }
}

function success(position) {
    console.log(position)
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    // Initializing Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoibW91bmlrYS1taXJhbGEiLCJhIjoiY2w0NTV5aG96NTlzbjNwcDdzYzNwM2xtbCJ9.ZRshrwKKyK67Q_2OUW6EKw';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 16
    });

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

    map.on('click', function (e) {
        destination = e.lngLat;
    });
}

