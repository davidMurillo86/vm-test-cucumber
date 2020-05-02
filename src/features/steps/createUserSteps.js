const { Then } = require('cucumber');
const createUserPage = require('../../pageObjects/createUserPage');
const { expect } = require("chai");
const testData = require('../../testData/testData');
const testd = require('../../pageObjects/userListPage');


Then('I create new employee', async function() {
   await createUserPage.validateHeaderText(this).then((text)=>{
       expect(text).to.be.equal(testData.newEmployeeHeader);
   });

   await createUserPage.createNewEmployee(this);
});

Then('test', async function() {
    await testd.findUser(this);
});