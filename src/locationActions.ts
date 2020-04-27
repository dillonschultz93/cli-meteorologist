export {};
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const fetch = require('node-fetch');
const chalk = require('chalk');

exports.getLocation = async (address: string) => {
	try {
		const response = await fetch(
			`https://us1.locationiq.com/v1/search.php?key=${
				process.env.LOCATION_API
			}&q=${encodeURIComponent(address).trim()}&format=json`
		);

		if (!response.ok) {
			throw new Error(response.status);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(chalk.red(`${error}`));
	}
};
