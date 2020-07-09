var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/**
 * getConfig() gets config data from url
 * @param {*} configUrl - URL of config file
 */
function getConfig(configUrl) {
    const Http = new XMLHttpRequest(); // a new request
    Http.open("GET", configUrl, false);
    Http.send(null);
    return Http.responseText;
}

module.exports = getConfig