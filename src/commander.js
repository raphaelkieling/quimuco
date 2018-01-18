const commander = require('commander');

commander
    .version('1.0.0')
    .option('-d , --directory [value]', 'Add diretory to run ng-cli chain')
    .option('-e , --entry [value]', 'Chage entry file config')
    .option('-i , --input-recipient [value]', 'Chage input recipient to changer')
    .parse(process.argv);

module.exports =  commander;