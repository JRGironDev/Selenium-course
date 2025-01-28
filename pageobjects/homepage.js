const { Builder, By, until } = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');

var webdriver = require('selenium-webdriver');

class HomePage extends BasePage{
    // This will enter the search text and click the search button
    enter_search(searchText) {
        driver.findElement(By.name('q')).sendKeys(searchText);
        driver.findElement(By.name('q')).sendKeys(webdriver.Key.RETURN);
    }
}

module.exports = new HomePage();
