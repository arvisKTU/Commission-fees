const assert = require('chai').assert;
let cashOutNatural = require('../modules/cashOutNatural')
let config = require('../config')

describe('cashOutNatural()', function () {
    it('funtion should return fee for cash out operations of natural users which is a percentage if it already exceeds week limit', function () {
        var expectedResult = 300
        var actualResult = cashOutNatural(100000, true, config.cashOutNaturalConf)
        assert.equal(actualResult, expectedResult)
    })
    it('funtion should return fee for cash out operations of natural users which is a percentage of exceeded amount if it exceeds week limit after this operation', function () {
        var expectedResult = (100000 - config.cashOutNaturalConf.week_limit.amount) * 0.003
        var actualResult = cashOutNatural(100000, false, config.cashOutNaturalConf)
        assert.equal(actualResult, expectedResult)
    })
    it('funtion should return fee for cash out operations of natural users which is 0 if week limit is not exceeded', function () {
        var expectedResult = 0
        var actualResult = cashOutNatural(1000, false, config.cashOutNaturalConf)
        assert.equal(actualResult, expectedResult)
    })
})