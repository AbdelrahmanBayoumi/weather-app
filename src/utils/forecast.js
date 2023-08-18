const request = require("request");

const forecast = (city, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    process.env.API_KEY +
    "&query=" +
    city +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " | It is currently " +
          body.current.temperature +
          "° degress out. There is a " +
          body.current.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
