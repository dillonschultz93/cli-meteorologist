export {};
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const moment = require('moment');
const chalk = require('chalk');
const locationActions = require('./locationActions');
const apiCalls = require('./utils/APICalls');
const getWeatherIcon = require('./utils/getWeatherIcon');

exports.getCurrentWeather = async (location: string) => {
	const locationData = await locationActions.getLocation(location);

	const weatherData = await apiCalls.weatherCall(
		locationData[0].lat,
		locationData[0].lon,
		process.env.WEATHER_API
	);

	console.log(chalk`
	|~|   📍 {bold ${locationData[0].display_name}}
	|~|   🌡  {yellow ${weatherData.current.temp}°F}
	|~|   ${getWeatherIcon.getWeatherIcon(
		weatherData.current.weather[0].description.toLowerCase()
	)}  ${weatherData.current.weather[0].description}
	|~|   🧴 UV Index: ${weatherData.current.uvi}
	`);
};

exports.getDailyWeather = async (location: string) => {
	const locationData = await locationActions.getLocation(location);
	const weatherData = await apiCalls.weatherCall(
		locationData[0].lat,
		locationData[0].lon,
		process.env.WEATHER_API
	);

	console.log(chalk`
		|~|   📍 {bold ${locationData[0].display_name}}
	`);

	weatherData.daily.forEach((element: any) => {
		console.log(chalk`
		|~|   🗓  {underline ${moment(new Date(element.dt * 1000)).format(
			'ddd, MMM Do, YYYY'
		)}}
		|~|   📉  {yellow ${element.temp.min}°F}
		|~|   📈  {yellow ${element.temp.max}°F}
		|~|   ${getWeatherIcon.getWeatherIcon(
			element.weather[0].description.toLowerCase()
		)}  ${element.weather[0].description}
		|~|   ----------------------------------------------
		`);
	});
};
