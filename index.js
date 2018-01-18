#!/usr/bin/env node
const commander = require('./src/commander');
const configFile = require('./src/reader-config')(commander.entry || 'qmc-config.json');
const configCommand = require('./src/relative-config')(configFile , commander);
const commands = configCommand(configFile.commands);

//path relative to __dirname
const directory = `${configFile.directory || commander.directory || ''}`;

setTimeout(() => {
    const path = `${process.cwd()}/${directory}`;
    require('./src/exec')(commands, path);
},1000)
