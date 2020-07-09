const assert = require('chai').assert;
let cashOutJuridical = require('../modules/cashOutJuridical')
let config = require('../config')

describe('cashOutJuridical()', function () {
    it('funtion should return fee for cash out operations of legal users which is min value if fee does not reach it', function () {
        var expectedResult = config.cashOutJuridicalConf.min.amount
        var actualResult = cashOutJuridical(1)
        assert.equal(actualResult, expectedResult)
    })
    it('funtion should return fee for cash out operations of legal users which is percentage from amount if fee exceeds min value', function () {
        var expectedResult = 3000
        var actualResult = cashOutJuridical(1000000)
        assert.equal(actualResult, expectedResult)
    })
})