let rounding = require('./rounding')
let percentageOfAmount = require('./percentageCalculation')
let config = require('../config')

/**
 * cashOutJuridical() calculates cash out fees for juridical users
 * @param {*} amount - amount of money of operation
 */
function cashOutJuridical(amount) {
    var conf = config.cashOutJuridicalConf
    var fee = percentageOfAmount(amount, conf)
    if (fee < conf.min.amount)
        fee = conf.min.amount
    return rounding(fee)
}

module.exports = cashOutJuridical