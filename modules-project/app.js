const fs = require('fs');
const log = require('./util.js');

fs.appendFileSync("notes.txt", new Date().toString() + "\n");

log('The text has been saved!');