const {By} = require('selenium-webdriver');

var arr = [];
module.exports={

    eachColumnData: function(trIndex, tdIndex) {
        return By.xpath('//div[@id="content"]/table/tbody/tr['+trIndex+']/td['+tdIndex+']');
    },

    selectors:{
        tableRows: By.xpath('//div[@id="content"]/table/tbody/tr')
    },

    populateList: async function(context) {
       let rowLength = await context.driver.findElements(this.selectors.tableRows);
       
       console.log(arr);
       
       if(arr.length === 0){
           for(i=2; i <= rowLength.length; i++){
               let employee = {};
               employee.firstName = await context.driver.findElement(this.eachColumnData(i,1)).getText();
               employee.lastName = await context.driver.findElement(this.eachColumnData(i,2)).getText();
               employee.ident = await context.driver.findElement(this.eachColumnData(i,3)).getText();
               employee.leadName = await context.driver.findElement(this.eachColumnData(i,4)).getText();
               employee.enterDate = await context.driver.findElement(this.eachColumnData(i,5)).getText();
               arr.push(employee);
         }
       }
    },

    //assuming we have unique leader names
    findUser: function(leaderName){
        console.log(arr);
        return arr.find( ({leadName}) => leadName === leaderName);
    }

}