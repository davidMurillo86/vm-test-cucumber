const { By, until } = require("selenium-webdriver");
const testData = require("../testData/testData");


module.exports = {

    selectors: {
        userNameInput: By.xpath('//input[@id="user_email"]'),
        userPassword: By.xpath('//input[@id="user_password"]'),
        submitButton: By.xpath('//input[@class="submit"]'),
        header:By.css('#content > h1')
    },

    loginHeaderText: async function(context){ 
        var element = await context.driver.findElement(this.selectors.header);
        return element.getText();
    },
    
    openUrl: async function(context, url){
        await context.driver.get(url);
    },
    
    login: async function(context) {
        
        let user = await context.driver.wait(until.elementLocated(this.selectors.userNameInput, 10000));
        await user.sendKeys(testData.username);
        
        let password = await context.driver.wait(until.elementLocated(this.selectors.userPassword, 10000));
        await password.sendKeys(testData.password);
    
        await context.driver.findElement(this.selectors.submitButton).click();
    
    }
    
}

