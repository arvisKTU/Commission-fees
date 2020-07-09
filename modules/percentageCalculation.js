/**
 * percentageOfAmount() calculates fee of amount of money given percentage
 * @param {*} amount - amount of money of operation
 * @param {*} config - config data
 */
function percentageOfAmount(amount, config) {
    var fee = amount * config.percents / 100
    return fee
}

module.exports = percentageOfAmount