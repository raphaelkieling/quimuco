const chalk = require('chalk');
const execSync = require('child_process').execSync;

module.exports = (commands, path) => {
    for (let i in commands) {
        console.log(chalk.green('[in-process]:', commands[i]));

        let resultExec = execSync(commands[i], { cwd: path });

        let status = resultExec.error
            ? chalk.red('Error!')
            : chalk.green('Success!');

        console.log(status, `[${i}]: ${commands[i]}`);
    }
}