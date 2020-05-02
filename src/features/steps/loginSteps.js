
const { Given, When } = require("cucumber");
const loginPage = require("../../pageObjects/loginPage");
const { expect } = require("chai");
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


