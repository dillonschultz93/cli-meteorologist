"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const moment = require('moment');
const chalk = require('chalk');
const locationActions = require('./locationActions');
const apiCalls = require('./utils/APICalls');
const getWeatherIcon = require('./utils/getWeatherIcon');
exports.getCurrentWeather = (location) => __awaiter(void 0, void 0, void 0, function* () {
    const locationData = yield locationActions.getLocation(location);
    const weatherData = yield apiCalls.weatherCall(locationData[0].lat, locationData[0].lon, process.env.WEATHER_API);
    console.log(chalk `
	|~|   📍 {bold ${locationData[0].display_name}}
	|~|   🌡  {yellow ${weatherData.current.temp}°F}
	|~|   ${getWeatherIcon.getWeatherIcon(weatherData.current.weather[0].description.toLowerCase())}  ${weatherData.current.weather[0].description}
	|~|   🧴 UV Index: ${weatherData.current.uvi}
	`);
});
exports.getDailyWeather = (location) => __awaiter(void 0, void 0, void 0, function* () {
    const locationData = yield locationActions.getLocation(location);
    const weatherData = yield apiCalls.weatherCall(locationData[0].lat, locationData[0].lon, process.env.WEATHER_API);
    console.log(chalk `
		|~|   📍 {bold ${locationData[0].display_name}}
	`);
    weatherData.daily.forEach((element) => {
        console.log(chalk `
		|~|   🗓  {underline ${moment(new Date(element.dt * 1000)).format('ddd, MMM Do, YYYY')}}
		|~|   📉  {yellow ${element.temp.min}°F}
		|~|   📈  {yellow ${element.temp.max}°F}
		|~|   ${getWeatherIcon.getWeatherIcon(element.weather[0].description.toLowerCase())}  ${element.weather[0].description}
		|~|   ----------------------------------------------
		`);
    });
});
