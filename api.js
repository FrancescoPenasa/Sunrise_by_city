const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
var courses_offered = [{id: 21, name: 'HCI'},
		       {id: 28, name:'sweng'}];

app.get('/', (req, res) => res.send('Hello World!'));
 
app.get('/courses', (req, res) => {
   res.json(courses_offered)
});
 

app.listen(PORT, () => console.log('Example app listening on port '+ PORT));



/**
 * 
 * const fetch = require('node-fetch');
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

 */