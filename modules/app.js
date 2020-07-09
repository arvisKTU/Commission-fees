//main module that invokes data reading and fee calculation functions
let readData = require('./readData')
let calculateFees = require('./calculateFees')

if (process.argv.length !== 3) throw new Error('Incorrect arguments: node main.js <INPUT FILE LOCATION>');
var input = readData(process.argv[2]);

calculateFees(input)