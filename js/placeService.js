'use strict'
const LOCATIONS_KEY = 'locations'

var map;
var gLocations;

loadLocationsFromStorage()
renderLocations()

function initMap(lat, lng) {
    if (!lat || !lang) lat = 29.5581, lng = 34.9482;
    var elMap = document.querySelector('#map');
    var options = {
        center: { lat, lng },
        zoom: 16
    };

    map = new google.maps.Map(
        elMap,
        options
    );

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Hello World!'
    });

    map.addListener('click', (ev) => {
        // console.log('Map clicked', ev);
        const placeName = prompt('Location name:')
        const newPlace = {
            id: makeId,
            placeName: placeName,
            lat: ev.latLng.lat(),
            lng: ev.latLng.lng(),
        }
        saveLocation(newPlace)
        renderLocations();
        // console.log('Map clicked', placeName, ev.latLng.lat(), ev.latLng.lng());
    })
}

function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
}

function showLocation(position) {
    // console.log(position);
    // console.log(map)
    // document.getElementById("latitude").innerHTML = position.coords.latitude;
    // document.getElementById("longitude").innerHTML = position.coords.longitude;
    // document.getElementById("accuracy").innerHTML = position.coords.accuracy;

    // var date = new Date(position.timestamp);
    // document.getElementById("timestamp").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    // initMap(position.coords.latitude, position.coords.longitude);
    map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })
    // saveLocation(position.coords.latitude, position.coords.longitude)
    // renderLocations()
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}

function loadLocationsFromStorage() {
    gLocations = getLocations(LOCATIONS_KEY);
    if (!gLocations) gLocations = [];
    console.log('Loaded locations:', gLocations);
}

function getLocations() {
    return gLocations
}
function renderLocations() {
    var locations = loadFromStorage(LOCATIONS_KEY)
    var elLocations = document.querySelector('.saved-locations')
    var strHTMLs = locations.map((location) => {
        return `<li onclick="onLocationClick('${location.id}')">
                    Home
                    <button onclick="alert('Rename')">?</button>
                    <button onclick="alert('Delete')">X</button></li>`
    })
    elLocations.innerHTML = strHTMLs.join('')
}

function saveLocation(place) {
    gLocations.push(place);
    console.log('gLocations:', gLocations);
    saveToStorage(LOCATIONS_KEY, gLocations);

}