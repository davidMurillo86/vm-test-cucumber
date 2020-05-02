const {By} = require('selenium-webdriver');

var arr = [];
module.exports={

    eachColumnData: function(trIndex, tdIndex) {
        return By.xpath('//div[@id="content"]/table/tbody/tr['+trIndex+']/td['+tdIndex+']');
    },

    selectors:{
        tableRows: By.xpath('//div[@id="content"]/table/tbody/tr')
    },

    findUser: async function(context) {
       let rowLength = await context.driver.findElements(this.selectors.tableRows);
       
       console.log(rowLength.length);
       
       if(arr != undefined){
           for(i=2; i <= rowLength.length; i++){
               let employee = {};
               employee.firstName = await context.driver.findElement(this.eachColumnData(i,1)).getText();
               employee.lastName = await context.driver.findElement(this.eachColumnData(i,2)).getText();
               employee.ident = await context.driver.findElement(this.eachColumnData(i,3)).getText();
               employee.leadName = await context.driver.findElement(this.eachColumnData(i,4)).getText();
               employee.enterDate = await context.driver.findElement(this.eachColumnData(i,5)).getText();arr.push(employee);
         }
       }
       return arr;
    }

}