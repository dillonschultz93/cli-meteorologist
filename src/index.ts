#!/usr/bin/env node
require('dotenv').config();
const program = require('commander');
const weatherActions = require('./weatherActions');

program
	.version('1.0.0')
	.description('A CLI tool that returns various weather forecasts');

program
	.command('now')
	.alias('n')
	.description('Show the weather information currently')
	.action(() => {
		weatherActions.getCurrentWeather(program.args[1]);
	});

program
	.command('daily')
	.alias('d')
	.description('Show the daily weather forecast')
	.action(() => {
		weatherActions.getDailyWeather(program.args[1]);
	});

program.parse(process.argv);
