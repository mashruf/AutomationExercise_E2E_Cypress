import LoginOrSignup from "../../PageObjectModel/loginOrSignup.js";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/// <reference types="cypress" />

const ln = new LoginOrSignup();

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then("I should see the homepage",()=>{
    ln.homePageVisible();
})

When("I click on Login or Signup button",()=>{
    ln.clickLoginOrSignup();
})

Then("I shold see Login to your account is visible",()=>{
    ln.loginPageVisible();
})

When("I enter incorrect email address and password",()=>{
    cy.get("input[data-qa='login-email']").type("wrong@email.com");
    cy.get("input[data-qa='login-password']").type("wrongPassword");
})

When("I click login button",()=>{
    ln.clickLoginButton();
})

Then("I should see Your email or password is incorrect! is visible",()=>{
    cy.get("form[action='/login']>p").should("contain","Your email or password is incorrect!");
})