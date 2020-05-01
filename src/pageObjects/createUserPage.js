const {By, until} = require('selenium-webdriver');
const testData = require('../testData/testData');

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
        pageHeader: By.css('#content > h1')
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
        let splitDate = testData.startDate.split("-");
        await context.driver.findElement(this.selectors.selectYear).sendKeys(splitDate[2]);
        await context.driver.findElement(this.selectors.selectMonth).sendKeys(this.getMonthNameFromDate(splitDate));
        await context.driver.findElement(this.selectors.selectDay).sendKeys(splitDate[0]);

        await context.driver.findElement(this.selectors.submitButton).click();
    },

    getMonthNameFromDate: function(splitDate) {
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let date = new Date(splitDate[2],splitDate[1]-1,splitDate[0]);

        console.log(date.getMonth());
        return months[date.getMonth()];
    }
}