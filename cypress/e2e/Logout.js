/// <reference types="cypress" />

import LoginOrSignup from "../../PageObjectModel/loginOrSignup.js";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const ln = new LoginOrSignup();


Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then("I should see the homepage",()=>{
    ln.homePageVisible();
})

When("I click on Login or Signup button",()=>{
    ln.clickLoginOrSignup();
    ln.createNewUser();//creating new user
    cy.get(".btn.btn-primary").click();
    cy.contains(".nav.navbar-nav>li","Logout").click();//logging out
})

Then("I shold see Login to your account is visible",()=>{
    ln.loginPageVisible();
})

When("I enter correct email address and password",()=>{
    ln.enterEmailAndPassword();
})

When("I click login button",()=>{
    ln.clickLoginButton();
})

Then("I should see Logged in as username is visible",()=>{
    ln.loginAsUsername();
})

When("I click Logout button",()=>{
    ln.logout();
})

Then("I should be nevigated to login page",()=>{
    cy.url().should("include","login");
})