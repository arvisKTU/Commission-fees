let fs = require('fs');

/**
 * readData() - reads JSON data from file
 * @param {*} path - path to the input file
 */
function readData(path) {
    const inputData = fs.readFileSync(path)
    return JSON.parse(inputData)
}

module.exports = readData