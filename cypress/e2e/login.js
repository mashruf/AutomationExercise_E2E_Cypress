import Login from "../../POM/loginPom.js"
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
let ln = new Login();


Given("Visit Orange HRM website",()=>{    
    ln.visitWebsite("https://opensource-demo.orangehrmlive.com/web/index.php");
    cy.wait(10000);
})


When("User provide username",()=>{
    ln.setUserName("Admin");
})


When("User provide password",()=>{
    ln.setPassWord("admin123");
})


When("User click the submit button",()=>{
    ln.clickSubmit();
})


Then("User should see the dashboard",()=>{
    ln.verifyLogin();
})
