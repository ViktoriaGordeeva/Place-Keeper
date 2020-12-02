'use strict'

function init() {
    renderLocations()
    initMap()
}

function initMap(lat = 29.5581, lng = 34.9482) {
    const elMap = document.querySelector('#map');
    const options = {
        center: { lat, lng },
        zoom: 16
    };

    map = new google.maps.Map(
        elMap,
        options
    );

    const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Hello Dear!'
    });

    map.addListener('click', (ev) => {
        const placeName = prompt('Location name:')
        const newPlace = {
            id: makeId(),
            placeName: placeName,
            lat: ev.latLng.lat(),
            lng: ev.latLng.lng(),
        }
        saveLocation(newPlace)
        renderLocations();
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
    map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })
}

function handleLocationError(error) {
    let locationError = document.getElementById("locationError");

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

function renderLocations() {
    var locations = loadFromStorage(LOCATIONS_KEY)
    if (!locations) return
    var elLocations = document.querySelector('.locations-list')
    var strHTMLs = locations.map((location) => {
        return `<li>${location.placeName}
                    <button onclick="onDelete('${location.id}')">X</button>
                </li>`
    })
    elLocations.innerHTML = strHTMLs.join('')
}

function onDelete(id) {
    deleteLocation(id)
    renderLocations()
}