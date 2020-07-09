const assert = require('chai').assert;
let amountPerWeek = require('../modules/amountPerWeek')

describe('amountPerWeek()', function () {
    it('funtion should return amount of money natural user will have cashed out in the same week with his current operation', function () {
        var input = []
        var operation = {
            date: "2020-07-05",
            user_id: 1,
            user_type: "natural",
            type: "cash_out",
            operation: {
                amount: 200.00,
                currency: "EUR"
            },
        };
        input.push(operation)
        operation = {
            date: "2020-07-06",
            user_id: 1,
            user_type: "natural",
            type: "cash_out",
            operation: {
                amount: 600.00,
                currency: "EUR"
            },
        };
        input.push(operation)
        operation = {
            date: "2020-07-07",
            user_id: 1,
            user_type: "natural",
            type: "cash_out",
            operation: {
                amount: 100.00,
                currency: "EUR"
            },
        };
        input.push(operation)
        input.push(operation)
        var expectedResult = 700.00
        var actualResult = amountPerWeek(2, "2020-07-07", 1, input)
        assert.equal(actualResult, expectedResult)
    })
})