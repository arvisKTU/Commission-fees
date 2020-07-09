const assert = require('chai').assert;
let cashIn = require('../modules/cashIn')
let config = require('../config')

describe('cashIn()', function () {
    it('funtion should return a fee for cash in operations which is a percentage of amount if it does not reach max value', function () {
        var expectedResult = 0.03
        var actualResult = cashIn(100)
        assert.equal(actualResult, expectedResult)
    })
    it('funtion should return a fee for cash in operations which is a max value if it reaches max value', function () {
        var expectedResult = config.cashInConf.max.amount
        var actualResult = cashIn(99999999999999)
        assert.equal(actualResult, expectedResult)
    })
})