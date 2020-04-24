#!/usr/bin/env node
const program = require('commander');
program
    .version('1.0.0')
    .description('A CLI tool that returns various weather forecasts');
program
    .command('today')
    .alias('t')
    .description('Show the weather information for today')
    .action(() => {
    console.log('Today is a nice day');
});
program.parse(process.argv);
