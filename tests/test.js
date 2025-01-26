const {Builder, By, Key} = require('selenium-webdriver');
require('chromedriver');

async function test_case() {
    // Create a new instance of the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    // Send driver to web page
    await driver.get('https://www.github.com/');

    // Grab an element from the page
    await driver.findElement(By.partialLinkText('Sign in')).click();

    // Display the title of the page
    console.log(await driver.getTitle());

    // If the title isn't correct, end the test
    if (await driver.getTitle() !== "Sign in to GitHub · GitHub") {
        throw new Error('Title was incorrect');
    } else {
        console.log('Title was correct');
    }

    // input a username and password
    await driver.findElement(By.name('login')).sendKeys('joserobertoq@outlook.com');
    await driver.findElement(By.name('password')).sendKeys('2Hidroxil@', Key.RETURN);

    if (await driver.findElement(By.className('flash-close js-flash-close')).isDisplayed()) {
        console.log('Elemnt was displayed');
    }

}

test_case();