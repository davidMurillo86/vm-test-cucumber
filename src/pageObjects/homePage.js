const { By, until } = require("selenium-webdriver");
const { expect } = require("chai");


module.exports={

    locators: {
        userInfo: '#menubar > #user_information > span',
        logo:'#logo',
        banner: '#content > p'
    },

    validateHome: async function(context){
        var locators = this.locators;
        context.driver.wait(until.elementIsVisible(By.css(locators.logo), 10000));
        //expect(context.driver.findElement(By.css(locators.userInfo))).dom.to.be.visible();
    }
    
}
