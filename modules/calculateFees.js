let config = require('../config')
let cashIn = require('./cashIn')
let cashOutJuridical = require('./cashOutJuridical')
let cashOutNatural = require('./cashOutNatural')
let amountPerWeek = require('./amountPerWeek')

/**
 * calculateFees() invokes cash in and cash out, amountPer week methods and writes results to console
 * @param {*} input - input data
 */
function calculateFees(input) {
    var conf = config.cashOutNaturalConf
    for (j = 0; j < input.length; j++) {
        if (input[j].type == "cash_in") {
            console.log(cashIn(input[j].operation.amount))
        }
        if (input[j].type == "cash_out") {
            if (input[j].user_type == "juridical") {
                console.log(cashOutJuridical(input[j].operation.amount))
            }
            else if (input[j].user_type == "natural") {
                var date = new Date(input[j].date);
                var week_limit = amountPerWeek(j, date, input[j].user_id, input)
                if (week_limit <= conf.week_limit.amount)
                    var hasExceededLimit = false //amount of money cashed out per week before current operation hasn't exceeded week limit
                console.log(cashOutNatural(input[j].operation.amount, hasExceededLimit, conf))
                if (week_limit > conf.week_limit.amount)
                    var hasExceededLimit = true
            }
        }
    }
}

module.exports = calculateFees