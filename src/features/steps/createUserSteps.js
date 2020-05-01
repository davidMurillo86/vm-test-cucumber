const { Then } = require('cucumber');
const createUserPage = require('../../pageObjects/createUserPage');
const { expect } = require("chai");
const testData = require('../../testData/testData');


Then('I create new employee', async function(){
   await createUserPage.validateHeaderText(this).then((text)=>{
       expect(text).to.be.equal(testData.newEmployeeHeader);
   });

   await createUserPage.createNewEmployee(this);
});