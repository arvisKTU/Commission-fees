const assert = require('chai').assert;
let rounding = require('../modules/rounding')

describe('rounding()', function () {
    it('function should return fee rounded to smallest element of currency', function () {
        var expectedResult = 2.14;
        var actualResult = rounding(2.1333333333333)
        assert.equal(actualResult, expectedResult)
    })
})