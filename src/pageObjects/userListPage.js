const {By} = require('selenium-webdriver');

var arr = [];
module.exports={

    eachColumnData: function(trIndex, tdIndex) {
        return By.xpath('//div[@id="content"]/table/tbody/tr['+trIndex+']/td['+tdIndex+']');
    },

    deleteButtonForSpecificUser: function(trIndex){
        return By.xpath('//tr['+trIndex+']//td/a[text()="Delete"]');
    },

    selectors:{
        tableRows: By.xpath('//div[@id="content"]/table/tbody/tr')
    },

    populateList: async function(context) {

        arr = [];
        
        let rowLength = await context.driver.findElements(this.selectors.tableRows);
        
        for(let i=2; i <= rowLength.length; i++){
            let employee = {};
            employee.firstName = await context.driver.findElement(this.eachColumnData(i,1)).getText();
            employee.lastName = await context.driver.findElement(this.eachColumnData(i,2)).getText();
            employee.ident = await context.driver.findElement(this.eachColumnData(i,3)).getText();
            employee.leadName = await context.driver.findElement(this.eachColumnData(i,4)).getText();
            employee.startDate = await context.driver.findElement(this.eachColumnData(i,5)).getText();
            arr.push(employee);
        }
       
    },

    //assuming we have unique leader names
    findUserByLeadName: function(leaderName){
        return arr.find( ({leadName}) => leadName === leaderName);
    },

    //returns index+2 assuming we want the index for table and not the array index. I'm not storing the table header on the array
    getUserIndex: function(leaderName){
        let index =-1;

        for(let i=0;i < arr.length;i++){
    
            if(arr[i].leadName === leaderName){
                index = i+2;
            }
        }
        return index;
    },

    deleteUser: async function(context, userIndex){
        await context.driver.findElement(this.deleteButtonForSpecificUser(userIndex)).click();
        await context.driver.switchTo().alert().accept();
    }

}