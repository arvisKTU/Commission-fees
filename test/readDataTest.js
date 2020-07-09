const assert = require('chai').assert;
let readData = require('../modules/readData')

describe('readData()', function () {
    it('function should return a data object which is read from file', function () {
        var expectedResult = { "date": "2016-02-15", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } };
        var currDir = process.cwd().toString()
        currDir = currDir.replace(/\\/g, '/');
        var actualResult = readData(currDir + '/test.json')
        assert.isObject(actualResult)
    })
})