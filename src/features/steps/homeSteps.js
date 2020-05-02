const { Then, When } = require("cucumber");
const homePage = require("../../pageObjects/homePage");
const { expect } = require("chai");
const testData = require("../../testData/testData");



Then('I should see the home page', async function(){
    await homePage.logo(this).then((element)=>{
       expect(element).to.not.be.undefined;
    });
 
    await homePage.userInfo(this).then((text)=>{
       expect(text.split(",")[0]).to.be.equal(testData.userInfo);
    });
 
    await homePage.banner(this).then((text)=>{
       expect(text).to.be.equal(testData.loggedSuccess);
    });
 });

 When('I click create new employee', async function(){
    await homePage.clickCreateNewEmployee(this);
 })

