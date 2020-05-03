require('chromedriver');
const webdriver = require("selenium-webdriver");
const { setDefaultTimeout, setWorldConstructor} = require("cucumber");


function CustomWorld({attach, parameters}) {
    
    this.attach = attach
    this.parameters = parameters
  
    this.driver = new webdriver.Builder().forBrowser("chrome").build();
    this.driver.manage().window().maximize();
}
setDefaultTimeout(30000);
setWorldConstructor(CustomWorld);