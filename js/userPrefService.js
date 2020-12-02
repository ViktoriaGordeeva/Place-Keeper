'use strict'
const FORECAST_KEY = 'forecast'
const COLORS_KEY = 'colors'

const gForecasts = [
    `Daytime: 16 °C 63 °F. Light Rain ( 19.2% ). Wind: NE 2.7 km/h. Humidity: 86.1%. 
    Nighttime: 10 °C 52 °F. Light Rain ( 36.6% ). Wind: W 20.2 km/h. Humidity: 93.6%'`,
    `Daytime: 23 °C 75 °F. Partly Cloud. Wind: NE 10.5 km/h. Humidity: 42.6%. 
    Nighttime: 12 °C 56 °F. Partly Cloud. Wind: W 9.3 km/h. Humidity: 29.6%'`,
    `Daytime: 30 °C 63 °F. Clear. Wind: NW 3.1 km/h. Humidity: 36.1%. 
    Nighttime: 23 °C 86 °F. Clear. Wind: W 10.2 km/h. Humidity: 53.8%'`,
]

function savePrefsToStorage(bgc, color, birthDate, email, age) {
    saveToStorage('userData', { bgc, color, birthDate, email, age })
}

function getForecastById(id) {
    return gForecasts[id]
}