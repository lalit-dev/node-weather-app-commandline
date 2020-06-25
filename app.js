const geocode = require('./utils/geocode')
debugger
const forecast = require('./utils/forecast')
debugger
const address = process.argv[2]
debugger
console.log("PROCESS = ", process);
process.env.NODE_ENV = 'development';
debugger
if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}
