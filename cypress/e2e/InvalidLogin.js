import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Repeatative from "../../PageObjectModel/repeatative.js";
/// <reference types="cypress" />

const rt = new Repeatative();

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then("I should see the homepage",()=>{
    rt.homePageVisible();
})

When("I click on Login or Signup button",()=>{
    rt.clickLoginOrSignup();
})

Then("I shold see Login to your account is visible",()=>{
    rt.loginPageVisible();
})

When("I enter incorrect email address and password",()=>{
    cy.get("input[data-qa='login-email']").type("wrong@email.com");
    cy.get("input[data-qa='login-password']").type("wrongPassword");
})

When("I click login button",()=>{
    rt.clickLoginButton();
})

Then("I should see Your email or password is incorrect! is visible",()=>{
    cy.get("form[action='/login']>p").should("contain","Your email or password is incorrect!");
})