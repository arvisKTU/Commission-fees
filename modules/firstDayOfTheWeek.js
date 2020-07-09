const moment = require('moment');

/**
 * firstDayOfTheWeek() finds the date of Monday that is in the same week as analyzed operation
 * @param {*} date - the date of operation which fee is being calculated
 */
function firstDayOfTheWeek(date) {
    if (moment(date).weekday() == 0) {
        var yesterday = moment(date).subtract(1, 'days')
        var firstDay = moment(yesterday).clone().weekday(1).startOf('day')
    }
    else
        var firstDay = moment(date).clone().weekday(1).startOf('day')
    return firstDay
}

module.exports = firstDayOfTheWeek