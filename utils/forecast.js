const request = require('request')
debugger
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/99d24e7ccad5bcce6c4d9494a50c3ed6/' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        debugger
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast