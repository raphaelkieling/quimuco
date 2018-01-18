#!/usr/bin/env node
const commander = require('./src/commander');
const configFile = require('./src/reader-config')(commander.entry || 'qmc-config.json');
const configCommand = require('./src/relative-config')(configFile, commander);

//path relative to __dirname
const directory = `${configFile.directory || commander.directory || ''}`;
const path = `${process.cwd()}/${directory}`;

for (let [key, commandsInKey] of Object.entries(configFile.commands)) {
    setTimeout(() => {
        const commands = configCommand(commandsInKey);

        require('./src/exec')(commands, path, key);
    }, 1000)
}