const moment = require('moment');
let firstDayOfTheWeek = require('./firstDayOfTheWeek')
/**
 * amountPerWeek() returns total amount of money a natural user has cashed out in a week
 * @param {*} number - serial number of operation whose fee is being calculated
 * @param {*} date - date of operation that is being calculated
 * @param {*} user - user id of user whose total week amount is calculated
 * @param {*} input - input data
 */
function amountPerWeek(number, date, user, input) {
    var amount = 0;
    var currDay = moment(date).startOf('day').format()
    var firstDay = firstDayOfTheWeek(date)
    for (i = 0; i < input.length; i++) {
        if (input[i].user_id == user && input[i].type == "cash_out") {
            if (moment(input[i].date).isSameOrAfter(firstDay) && moment(input[i].date).isSameOrBefore(currDay) && i <= number)
                amount += input[i].operation.amount;
        }
    }
    return amount
}

module.exports = amountPerWeek