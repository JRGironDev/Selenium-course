const {By, Key, Builder} = require('selenium-webdriver');
require('chromedriver');

async function scrape() {
    // Create a new instance of the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    // Send driver to web page
    await driver.get('https://ratings.fide.com/top.phtml?list=men')

    // Grab an element from the page
    var names = await driver.findElements(By.css('.tur'));

    for(let n of names) {
        console.log(await n.getText());
    }

    driver.quit();
}


scrape();