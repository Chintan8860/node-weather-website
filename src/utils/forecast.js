const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
        lat + '&lon=' + long +
        '&&appid=ff79a34aa446aab4481d56dce0cd007d'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('pls connect internet', undefined)
        } else if (body.message) {
            callback(body.message, undefined)
        } else {
            callback(undefined, {
                temp: body.main.temp,
                wetherid: body.weather[0].id
            })
        }
    })
}

module.exports = forecast