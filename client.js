const fetch = require('node-fetch');
const KEY = "TEk64IAYCLwiOukbMn3UC878UMWRHxJD";
const url_mapquest = "http://www.mapquestapi.com/geocoding/v1/address?key="+KEY+"&location="+process.argv[2]+","+process.argv[3];

const getSunrisetime = async url_mapquest => {
  try {
    const response = await fetch(url_mapquest);
		const json_mapquest = await response.json();

		var lng = json_mapquest.results[0].locations[0].latLng.lng;
		var lat = json_mapquest.results[0].locations[0].latLng.lat;

		const url_sunrise = "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lng;

		const res_sunrise = await fetch(url_sunrise);
		const json_sunrise = await res_sunrise.json();
		
		console.log("Sunrise of "+process.argv[2]+","+process.argv[3]+" is: \n");
		console.log(json_sunrise);

  } catch (error) {
    console.log(error);
  }
};

getSunrisetime(url_mapquest);






/** 


const url = "http://localhost:3000/";

const getLocation = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
  } catch (error) {
    console.log(error);
  }
};

getLocation(url);
*/