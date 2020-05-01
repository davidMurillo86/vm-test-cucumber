const { By, until } = require("selenium-webdriver");

module.exports={

    selectors: {
        userInfo: By.css('#user_information > span'),
        logo: By.css('#logo'),
        banner: By.css('#content > p'),
        newEmployeeButton: By.xpath('//a[text()="Create a new employee"]')
    },

    logo: async function(context) {
        return await context.driver.wait(until.elementIsVisible(context.driver.findElement(this.selectors.logo), 10000));
    },

    userInfo: async function(context) {
        return await context.driver.wait(until.elementLocated(this.selectors.userInfo), 10000).getText();
    },

    banner: async function(context) {
        return await context.driver.wait(until.elementLocated(this.selectors.banner), 10000).getText();
    },

    clickCreateNewEmployee: async function(context){
        await context.driver.findElement(this.selectors.newEmployeeButton).click();
    }
}
