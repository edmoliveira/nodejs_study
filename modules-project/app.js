const fs = require('fs');
const log = require('./util.js');
const validator = require('validator');
const chalk = require('chalk');

fs.appendFileSync("notes.txt", new Date().toString() + "\n");

log(chalk.blue('The text has been saved!'));

if(validator.isEmail('emoliveira@teste.com')){
    log(chalk.green.bold('Email is valid!'));
}
else {
    log(chalk.red('Email is not valid!'));
}