const {After} = require('cucumber');


After( function() {
  setTimeout(()=>{
    this.driver.close();
  },200); 
});