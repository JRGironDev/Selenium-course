var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chome').build();

driver.manage().setTimeouts({implicit:(10000)});

class BasePage{
    constructor() {
        global.driver = driver;
    }
}

module.exports = BasePage;