'use strict'

function onAddPrefs(ev) {
    ev.preventDefault()
    var bgc = document.querySelector('#pref-bgc').value
    var color = document.querySelector('#pref-color').value
    var birthDate = document.querySelector('#birth-date').value
    var email = document.querySelector('#email').value
    var age = document.querySelector('#age').value
    // if (!validateAge(age, birthDate)) {
    //     alert('You entered a wrong age or birth date!')
    // } else {
        savePrefsToStorage(bgc, color, birthDate, email, age)
        var forecast = getForecast()
        // window.location = 'index.html'
        document.querySelector('.forecast').innerText = forecast
    // }
}

// function validateAge(age, birthDate) {
//     var currYear = new Date().getFullYear();
//     if (currYear - birthDate.getFullYear() !== age) return false
// }