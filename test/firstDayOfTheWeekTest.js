const assert = require('chai').assert;
let firstDayOfTheWeek = require('../modules/firstDayOfTheWeek')
const moment = require('moment');

describe('firstDayOfTheWeek()', function () {
    it('funtion should return first day of the week if current day is sunday', function () {
        var expectedResult = moment('2020-07-06').startOf('day').format()
        var date = new Date('2020-07-12');
        var actualResult = firstDayOfTheWeek(date).format()
        assert.equal(actualResult, expectedResult)
    })
    it('funtion should return first day of the week if current day is not sunday', function () {
        var expectedResult = moment('2020-07-06').startOf('day').format()
        var date = new Date('2020-07-08');
        var actualResult = firstDayOfTheWeek(date).format()
        assert.equal(actualResult, expectedResult)
    })
})