let getConfig = require('./modules/getConfig')
module.exports = {
    cashInConf: JSON.parse(getConfig("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in")),
    cashOutJuridicalConf: JSON.parse(getConfig("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical")),
    cashOutNaturalConf: JSON.parse(getConfig("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural"))
}