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
        if(!config.changer){
            return;
        }
        config.changer.map((changer) => {
            command = command.replace(new RegExp(`\\${getRecipientValue()}`, 'g', ), getInputValue());

            function getRecipientValue() {
                return changer && changer.recipient || '$';
            }

            function getInputValue() {
                return commander.inputRecipient || changer && changer.input || '';
            }
        })

        return command;

    }
}

