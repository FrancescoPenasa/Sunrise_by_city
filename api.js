const express = require('express');
const fetch = require('node-fetch');
var bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const KEY = process.env.def;

const getSunrisetime = async (url_mapquest,res) => {
  try {
    const response = await fetch(url_mapquest);
		const json_mapquest = await response.json();

		var lng = json_mapquest.results[0].locations[0].latLng.lng;
		var lat = json_mapquest.results[0].locations[0].latLng.lat;

		const url_sunrise = "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lng;

		const res_sunrise = await fetch(url_sunrise);
		const json_sunrise = await res_sunrise.json();
		
		console.log(json_sunrise);
		
		//response	
  	res.json(json_sunrise);
		res.status(201);
		//res.redirect("/city");

  } catch (error) {
    console.log(error);
  }
};


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/', express.static('public'));

app.post('/city', function (req, res) {
	const url_mapquest = "http://www.mapquestapi.com/geocoding/v1/address?key=" + KEY + "&location=" + req.body.city + "," + req.body.state;
	getSunrisetime(url_mapquest, res);	
});


app.listen(PORT, () => console.log('Example app listening on port '+ PORT));