const { By, until } = require("selenium-webdriver");
const testData = require("../testData/testData");




module.exports = {

    locators: {
        userNameInput: '//input[@id="user_email"]',
        userPassword:'//input[@id="user_password"]',
        submitButton: '//input[@class="submit"]',
        header:'#content > h1'
    },

    headerText: async function(context){
        await context.driver.findElement(By.css(locators.header));
    },
    
    openUrl: async function(context, url){
        await context.driver.get(url);
    },
    
    login: async function(context) {

        var locators = this.locators;
        
        let user = await context.driver.wait(until.elementLocated(By.xpath(locators.userNameInput), 10000));
        await user.sendKeys(testData.username);
        
        let password = await context.driver.wait(until.elementLocated(By.xpath(locators.userPassword), 10000));
        await password.sendKeys(testData.password);
    
        await context.driver.findElement(By.xpath(locators.submitButton)).click();
    
    }
    
}

