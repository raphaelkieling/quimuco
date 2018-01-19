module.exports = (path) => {
    const chalk = require('chalk');
    try {
        return require(`${process.cwd()}/${path}`);
    } catch (e) {
        console.log(chalk.red(`Error in get config ${path}`))
        return null;
    }
}

