const {By, until} = require('selenium-webdriver');
const testData = require('../testData/testData');
const moment = require('moment');

module.exports= {
    selectors: {
        firstName: By.xpath('//input[@id="employee_first_name"]'),
        lastName: By.xpath('//input[@id="employee_last_name"]'),
        email: By.xpath('//input[@id="employee_email"]'),
        identification: By.xpath('//input[@id="employee_identification"]'),
        leaderName: By.xpath('//input[@id="employee_leader_name"]'),
        selectYear: By.xpath('//select[@id="employee_start_working_on_1i"]'),
        selectMonth: By.xpath('//select[@id="employee_start_working_on_2i"]'),
        selectDay: By.xpath('//select[@id="employee_start_working_on_3i"]'),
        submitButton: By.css('.actions > input'),
        pageHeader: By.css('#content > h1'),
        backButton: By.xpath('//a[text()="Back"]')
    },

    validateHeaderText: async function(context){
        return await context.driver.wait(until.elementLocated(this.selectors.pageHeader), 10000).getText();
    },

    createNewEmployee: async function(context){
        await context.driver.findElement(this.selectors.firstName).sendKeys(testData.employeeFirstName);
        await context.driver.findElement(this.selectors.lastName).sendKeys(testData.employeeLastName);
        await context.driver.findElement(this.selectors.email).sendKeys(testData.employeeEmail);
        await context.driver.findElement(this.selectors.identification).sendKeys(testData.identification);
        await context.driver.findElement(this.selectors.leaderName).sendKeys(testData.leaderName);

        //dates
        let date = moment(testData.startDate, "DD-MM-YYYY", true);
        await context.driver.findElement(this.selectors.selectYear).sendKeys(date.get('year'));
        await context.driver.findElement(this.selectors.selectMonth).sendKeys(date.format('MMMM'));
        await context.driver.findElement(this.selectors.selectDay).sendKeys(date.get('date'));

        await context.driver.findElement(this.selectors.submitButton).click();

        await context.driver.findElement(this.selectors.backButton).click();
    },
}