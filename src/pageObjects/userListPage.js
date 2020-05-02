const {By} = require('selenium-webdriver');


module.exports={

    columnCount: function(index) {
        return By.xpath('//div[@id="content"]/table/tbody/tr['+index+']/td');
    },

    eachColumnData: function(trIndex, tdIndex) {
        return By.xpath('//div[@id="content"]/table/tbody/tr['+trIndex+']/td['+tdIndex+']');
    },

    selectors:{
        tableRows: By.xpath('//div[@id="content"]/table/tbody/tr')
    },

    findUser: async function(context) {
       let rowLength = await context.driver.findElements(this.selectors.tableRows);
       console.log(rowLength.length);
       
       for(i=1; i <= rowLength.length; i++){
           let td = await context.driver.findElements(this.columnCount(i));
           
           for(j=1; j<= td.length; j++){
               await context.driver.findElement(this.eachColumnData(i,j)).getText().then((text)=>{
                   console.log(text);
               });
           }
        }
    }

}