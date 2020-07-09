let calculateFees = require('../modules/calculateFees')
const expect = require('chai').expect;
require('mocha-sinon');

describe('calculateFees()', function () {
    beforeEach(function () {
        this.sinon.stub(console, 'log');
    });
    it('funtion should return calculated fees if operation type is cash in', function () {
        var input = []
        var operation = {
            date: "2020-07-05",
            user_id: 1,
            user_type: "natural",
            type: "cash_in",
            operation: {
                amount: 600.00,
                currency: "EUR"
            },
        };
        input.push(operation)
        calculateFees(input)
        expect(console.log.calledWith('0.18')).to.be.true;
    })
    it('funtion should return calculated fees if operation type is cash out for juridical users', function () {
        var input = []
        var operation = {
            date: "2020-07-05",
            user_id: 1,
            user_type: "juridical",
            type: "cash_out",
            operation: {
                amount: 600.00,
                currency: "EUR"
            },
        };
        input.push(operation)
        calculateFees(input)
        expect(console.log.calledWith('1.80')).to.be.true;
    })
    it('funtion should return calculated fees if operation type is cash out for natural users', function () {
        var input = []
        var operation = {
            date: "2020-07-05",
            user_id: 1,
            user_type: "natural",
            type: "cash_out",
            operation: {
                amount: 10000.00,
                currency: "EUR"
            },
        };
        input.push(operation)
        calculateFees(input)
        expect(console.log.calledWith('27.00')).to.be.true;
    })
})