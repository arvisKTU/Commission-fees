const assert = require('chai').assert;
let config = require('../config')
let percentageCalculator = require('../modules/percentageCalculation')

describe('percentageCalculator()', function () {
    it('function should return a percentage of amount, given config', function () {
        var expectedResult = 0.3;
        var actualResult = percentageCalculator(1000, config.cashInConf)
        assert.equal(actualResult, expectedResult)
    })
})