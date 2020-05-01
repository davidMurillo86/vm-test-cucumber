
const { Given, When, Then, And } = require("cucumber");
const loginPage = require("../../pageObjects/loginPage");
const homePage = require("../../pageObjects/homePage");
const { expect, assert } = require("chai");
const testData = require("../../testData/testData");

    
Given('I go to {string} page', async function(url){
   await loginPage.openUrl(this, url);
   await loginPage.loginHeaderText(this).then((text)=>{
      expect(text).to.be.equal(testData.loginHeader);
   });
   
});

When('I log in to the page', async function(){
   await loginPage.login(this);
});

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

