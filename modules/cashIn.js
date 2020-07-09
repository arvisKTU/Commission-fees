let rounding = require('./rounding')
let percentageOfAmount = require('./percentageCalculation')
let config = require('../config')
/**
 * cashIn() calculates cashIn fees of operation
 * @param {*} amount - amount of money of operation
 */
function cashIn(amount) {
    var conf = config.cashInConf
    var fee = percentageOfAmount(amount, conf)
    if (fee > conf.max.amount)
        fee = conf.max.amount
    return rounding(fee)
}

module.exports = cashIn