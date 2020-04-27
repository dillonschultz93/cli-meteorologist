export {};
const fetch = require('node-fetch');
const chalk = require('chalk');

exports.weatherCall = async (lat: string, lon: string, key: string) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`
		);

		if (!response.ok) {
			throw new Error(`${response.status}. Bad request.`);
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.log(chalk.red(`${error}`));
	}
};
