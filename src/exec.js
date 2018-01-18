const chalk = require('chalk');
const execSync = require('child_process').execSync;

module.exports = (commands, path, groupName) => {
    console.log('[GROUPS]: ', groupName);

    for (let i in commands) {
        console.log(chalk.blue('[in-process]:', commands[i]));

        try {
            let resultExec = execSync(commands[i], { cwd: path });
            let status = resultExec.error
                ? chalk.red('Error!')
                : chalk.green('Success!');
            console.log(status, `[${i}]: ${commands[i]}`);

        } catch (e) {
            console.log(chalk.red(`Error! ${commands[i]}`));
        }
    }
}