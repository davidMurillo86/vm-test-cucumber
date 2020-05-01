
const { Given, When, Then, And } = require("cucumber");
const loginPage = require("../../pageObjects/loginPage");
const home = require('../../pageObjects/homePage');
const { expect } = require("chai");


    
Given('I go to {string} page', async function(url){
   await loginPage.openUrl(this, url);
   //let element = await loginPage.headerText(this);
   //let headerText = element.getText().then((text)=>{return text});

//   expect(headerText).to.be.equal(testData.loginHeader);
});

When('I log in to the page', async function(){
   await loginPage.login(this);
});

Then('I should see the home page', async function(){
   await loginPage.validateHome(this);
});

