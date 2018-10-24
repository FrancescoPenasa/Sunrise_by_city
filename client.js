const fetch = require("node-fetch");

var readline = require('readline-sync');
var city = readline.question("What is your city,state?");


const KEY = "TEk64IAYCLwiOukbMn3UC878UMWRHxJD";
const url = "http://www.mapquestapi.com/geocoding/v1/address?key="+KEY+"&location="+city;

const getLocation = async url => {
  try {
    const response = await fetch(url);
	const json = await response.json();
	console.log("json.result = ")
	console.log(json.results);

	console.log("json.FUNZIONAT")
	console.log(json.results[0].locations[0].latLng.lng);
	console.log("JSON")
    console.log(json)
  } catch (error) {
	  console.log("vai vai")
    console.log(error);
  }
};


getLocation(url);


//var lat = results.0.locations.0.latLng.lat;
//var lng = results.0.locations.0.latLng.lng;