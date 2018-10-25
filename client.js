const fetch = require("node-fetch");

var readline = require('readline-sync');
var city = readline.question("What is your city,state?");

const KEY = "TEk64IAYCLwiOukbMn3UC878UMWRHxJD";
const url = "http://www.mapquestapi.com/geocoding/v1/address?key="+KEY+"&location="+city;


const getLocation = async url => {
  try {
    const response = await fetch(url);
	const json = await response.json();

	var lng = json.results[0].locations[0].latLng.lng;
	var lat = json.results[0].locations[0].latLng.lat;
	
	var url2 = "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lng;
	const response2 = await fetch(url2);
	const json2 = await response2.json();
	
	console.log("Sunrise of "+city+ " is: \n");
	console.log(json2);

  } catch (error) {
	  console.log("vai vai")
    console.log(error);
  }
};



getLocation(url);

