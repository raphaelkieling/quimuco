module.exports = (config, commander) => {
    return (commands) => {
        return configCommands(commands);
    };

    function configCommands(commands) {
        commands = checkJoker(commands);
        return commands;
    }

    function checkJoker(commands) {
        return commands.map(replaceJoker)
    }

    function replaceJoker(command) {
        return command.replace(
            config.changer && config.changer.recipient || '$',
            commander.inputRecipient || config.changer && config.changer.input || ''
        );
    }
}

