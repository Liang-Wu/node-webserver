const request = require('request')
const forecast=(lat, lon, callback)=> {
    const options = {
        method: 'GET',
        url: 'https://api.climacell.co/v3/weather/realtime',
        json: true,
        qs: {
            lat: lat,
            lon: lon,
            unit_system: 'si',
            fields: 'temp,feels_like,dewpoint,humidity,wind_speed,wind_direction,baro_pressure,precipitation,precipitation_type',
            apikey: 'RM3rpJSCL60HY9WG9vWZvR0LpoUg0E9E'
        }
    }
    request(options, (error, response, body) => {
        if (error) callback('Unable to connect to weather service', undefined);
        else if (body.error) callback('unable to find location', undefined)
        else {
            const message = 'Temperature: ' + body.temp.value + ' ' + body.temp.units + ' and feels like ' + body.feels_like.value + ' ' + body.feels_like.units
            callback(undefined,message);
        }
    })
}

module.exports =forecast

