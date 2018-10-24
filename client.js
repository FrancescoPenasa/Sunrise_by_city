const fetch = require("node-fetch");

var readline = require('readline-sync');
var city = readline.question("What is your city,state?");


const KEY = "TEk64IAYCLwiOukbMn3UC878UMWRHxJD";
const url = "http://www.mapquestapi.com/geocoding/v1/address?key="+KEY+"&location="+city;

const getLocationSun = async urlsun => {
	try {
	  const response = await fetch(url);
	  const jsonb = await response.json();
	  console.log("SUNRISE:")
	  console.log(jsonb.results)
	  console.log("SUNSET:")
	  console.log(jsonb.status)
	} catch (error) {
	  console.log(error);
	}
  };

const getLocation = async url => {
  try {
    const response = await fetch(url);
	const json = await response.json();

	var lng = json.results[0].locations[0].latLng.lng;
	var lat = json.results[0].locations[0].latLng.lat;


	var urlsun = "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lng;
	console.log(urlsun);	
	getLocationSun(urlsun);
	
	
	

  } catch (error) {
	  console.log("vai vai")
    console.log(error);
  }
};


getLocation(url);


//var lat = results.0.locations.0.latLng.lat;
//var lng = results.0.locations.0.latLng.lng;