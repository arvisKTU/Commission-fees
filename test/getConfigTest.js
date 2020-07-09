const assert = require('chai').assert;
let getConfig = require('../modules/getConfig')

describe('getConfig()', function () {
    it('funtion should return config data from URL', function () {
        var expectedResult = '{\n    "percents": 0.03,\n    "max": {\n        "amount": 5,\n        "currency": "EUR"\n    }\n}'
        var actualResult = getConfig("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in")
        assert.equal(actualResult, expectedResult)
    })
})