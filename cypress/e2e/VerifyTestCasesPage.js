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

When("I click on Test Cases button",()=>{
    cy.contains(".nav.navbar-nav>li","Test Cases").click();
})

Then("I should navigated to the test cases page",()=>{
    cy.get(".title.text-center").should("contain","Test Cases");
})