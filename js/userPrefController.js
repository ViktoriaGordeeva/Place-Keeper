'use strict'

function onAddPrefs(ev) {
    ev.preventDefault()
    const bgc = document.querySelector('#pref-bgc').value
    const color = document.querySelector('#pref-color').value
    const birthDate = document.querySelector('#birth-date').value
    const email = document.querySelector('#email').value
    const age = document.querySelector('#age').value
    savePrefsToStorage(bgc, color, birthDate, email, age)
    saveToStorage(FORECAST_KEY, getRandomIntInclusive(0, 2))
    saveToStorage(COLORS_KEY, { bgc, color })
    window.location = 'index.html'
}

function renderForecast() {
    const forecastId = loadFromStorage(FORECAST_KEY)
    if (!forecastId) return
    const forecast = getForecastById(forecastId)
    document.querySelector('.forecast-area').innerText = forecast
}

function updateTextInput(val) {
    document.getElementById('text-age').innerText = val;
}

function renderHome() {
    const bgc = loadFromStorage(COLORS_KEY).bgc
    const color = loadFromStorage(COLORS_KEY).color
    if (!bgc || !color) return
    document.getElementsByTagName("BODY")[0].style.backgroundColor = bgc;
    document.getElementsByTagName("BODY")[0].style.color = color;
    renderForecast()
}