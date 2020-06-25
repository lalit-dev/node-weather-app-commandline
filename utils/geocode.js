const request = require('request')
debugger
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibGFsaXR5YWRhdiIsImEiOiJja2JxM2cyZmoxYndtMnltaTg1bDUzajNtIn0.sb0qEZGMsgr0RcVTqeJHbA&limit=1'

    request({ url: url, json: true }, (error, response) => {
        debugger
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode