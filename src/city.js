const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const city = express.Router();
const KEY_MAPQUEST = "?key=TEk64IAYCLwiOukbMn3UC878UMWRHxJD";
const URL_MAPQUEST = "http://www.mapquestapi.com/geocoding/v1/address";
const URL_SUNRISESUNSET = "https://api.sunrise-sunset.org/json?";

city.use(bodyParser.json());
city.use(bodyParser.urlencoded({ extended: true }));

/***** FUNCTIONS *****/
function inputValid(req){
  let city = req.body.city;
  let state = req.body.state;
  return "&location=" + city + "," + state;
}

function coordinateValid(res){
  let lng = res.results[0].locations[0].latLng.lng;
  let lat = res.results[0].locations[0].latLng.lat;
  return {lng : lng, lat : lat}
}

async function getSunrisetime  (url, req, res){
  try {
    let response_mapquest = await fetch(url);
		let json_mapquest = await response_mapquest.json();
    let city = coordinateValid(json_mapquest)

		url = URL_SUNRISESUNSET + "lat=" + city.lat + "&lng=" + city.lng;
		let response_sunrise = await fetch(url);
		let json_sunrise = await response_sunrise.json();

		return json_sunrise;

  } catch (error) {
    console.log(error);
  }
};


city.post('/', async (req, res) => {
  try {
    let input = inputValid(req);
    let json = await getSunrisetime(URL_MAPQUEST + KEY_MAPQUEST + input, req, res);
    res.json(json);
    res.status(200);

  } catch (error) {
    console.log(error);
  }
});


module.exports = city;
