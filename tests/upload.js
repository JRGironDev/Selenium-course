const {Builder, By, Key} = require('selenium-webdriver');
require('chromedriver');

async function upload() {
    // Create a new instance of the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    // Send driver to web page
    await driver.get('https://filebin.net');

    // Grab input element from the page
    let input = await driver.findElement(By.id('fileField'));

    //form.click();
    await input.sendKeys('/Users/jquinonez/Codes/Quality/Selenium/Selenium-demo/tests/test.js');

}

upload();