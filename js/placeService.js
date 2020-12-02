'use strict'


function initMap(lat, lng) {
    if (!lat||!lang) lat = 29.5581, lng = 34.9482;
    var elMap = document.querySelector('#map');
    var options = {
        center: { lat, lng },
        zoom: 16
    };

    var map = new google.maps.Map(
        elMap,
        options
    );

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Hello World!'
    });

    // map.addListener('click', (ev) => {
    //     console.log('Map clicked', ev);
    //     const placeName = prompt('Place name?')
    //     console.log('Map clicked', placeName, ev.latLng.lat(), ev.latLng.lng());
    // })
}