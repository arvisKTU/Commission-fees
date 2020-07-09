/**
 * rounding() rounds fees to the smallest element of currency (i.e. to euro cents)
 * @param {*} amount - amount of money of operation
 */
function rounding(amount) {
    var roundedNumber = Math.ceil(amount * 100) / 100
    return roundedNumber.toFixed(2)
}

module.exports = rounding