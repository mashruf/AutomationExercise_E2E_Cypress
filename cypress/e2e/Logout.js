/// <reference types="cypress" />

import Repeatative from "../../PageObjectModel/repeatative.js";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

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

When("I enter correct email address and password",()=>{
    cy.fixture("loginInfo").then((login)=>{
        cy.get("input[data-qa='login-email']").type(login.email);
        cy.get("input[data-qa='login-password']").type(login.password);
    })
})

When("I click login button",()=>{
    rt.clickLoginButton();
})

Then("I should see Logged in as username is visible",()=>{
    cy.get("li:nth-child(10) a:nth-child(1)").should("contain", " Logged in as Gloria");
})

When("I click Logout button",()=>{
    rt.logout();
})

Then("I should be nevigated to login page",()=>{
    cy.url().should("include","login");
})