const {By, Key, Builder} = require('selenium-webdriver');
require('chromedriver');

async function scrape() {
    // Create a new instance of the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    // Send driver to web page
    await driver.get('https://www.youtube.com/channel/UClLRjv91UloHweZMyxpRPrw')

    // Get and display all of the links in the page
    var links = await driver.findElements(By.css('a'));

    for(let link of links) {
        console.log(await link.getText());
    }

    // displau a specific link
    var line = await driver.findElement(By.partialLinkText("WiFi"));
    console.log(await line.getText());
    driver.quit();
}

scrape() ;