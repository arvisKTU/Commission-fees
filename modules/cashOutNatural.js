let rounding = require('./rounding')
let percentageOfAmount = require('./percentageCalculation')
let config = require('../config')

/**
 * cashOutNatural() calculates cash out fees for natural users
 * @param {*} amount - amount of money of operation
 * @param {*} hasExceededLimit - a check to see if week limit was already exceeded in previous operation
 * @param {*} cashOutNaturalConfig - a config of cash out for natural users
 */
function cashOutNatural(amount, hasExceededLimit, cashOutNaturalConfig) {
    var conf = config.cashOutNaturalConf
    if (!hasExceededLimit) {
        if (amount <= conf.week_limit.amount)
            var fee = 0
        else {
            var fee = percentageOfAmount(amount - conf.week_limit.amount, conf)
        }
        return rounding(fee)
    }
    else {
        var fee = percentageOfAmount(amount, conf)
        return rounding(fee)
    }
}

module.exports = cashOutNatural