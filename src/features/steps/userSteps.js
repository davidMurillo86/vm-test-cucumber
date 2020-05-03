const { Then, When } = require('cucumber');
const createUserPage = require('../../pageObjects/createUserPage');
const { expect } = require("chai");
const testData = require('../../testData/testData');
const userListPage = require('../../pageObjects/userListPage');
const moment = require("moment");

var userIndex;

When('I create new employee', async function() {
   await createUserPage.validateHeaderText(this).then((text)=>{
       expect(text).to.be.equal(testData.newEmployeeHeader);
   });

   await createUserPage.createNewEmployee(this);
});

Then('Validate created user', async function(data) {
    await userListPage.populateList(this);
    let employee = userListPage.findUserByLeadName(data.hashes()[0].leadName);
    
    expect(employee.firstName).to.be.equal(data.hashes()[0].firstName);
    expect(employee.lastName).to.be.equal(data.hashes()[0].lastName);
    expect(employee.ident).to.be.equal(data.hashes()[0].identification);
    expect(employee.leadName).to.be.equal(data.hashes()[0].leadName);
    expect(employee.startDate).to.be.equal(moment(data.hashes()[0].startDate, "DD-MM-YYYY",true).format("MM/DD/YYYY"));
});

Then('log the user index in table', async function(){
    let index = userListPage.getUserIndex(testData.leaderName);
    console.log("User index is: "+index);
    expect(index,"User not found").to.be.greaterThan(0);
});

Then('I search for the employee with leadName {string}', async function(leadName){
    let index = userListPage.getUserIndex(testData.leaderName);

    if(index != -1){
        userIndex = index;
    }

    expect(index, "User not found").to.be.greaterThan(0);
});

Then('I delete the user', async function(){
    await userListPage.deleteUser(this, userIndex);
});

Then('I Validate user does not exist', async function(){
    await userListPage.populateList(this);
    let index = userListPage.getUserIndex(testData.leaderName);
    expect(index, "User found and was not deleted").to.be.equal(-1);
});