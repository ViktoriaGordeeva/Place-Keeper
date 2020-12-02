'use strict'
const LOCATIONS_KEY = 'locations'

var map;
var gLocations;

loadLocationsFromStorage()


function loadLocationsFromStorage() {
    gLocations = loadFromStorage(LOCATIONS_KEY);
    if (!gLocations) gLocations = [];
    console.log('Loaded locations:', gLocations);
}

function getLocations() {
    return gLocations
}

function saveLocation(place) {
    gLocations.push(place);
    console.log('gLocations:', gLocations);
    saveToStorage(LOCATIONS_KEY, gLocations);
}

function deleteLocation(idx) {
    const locId = gLocations.findIndex(location => location.id === idx)
    gLocations.splice(locId, 1)
    saveToStorage(LOCATIONS_KEY, gLocations)
}