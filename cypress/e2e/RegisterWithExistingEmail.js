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

Then("I should see New User Signup! text",()=>{
    rt.signupPageVisible();
})

When("I enter name and already registered email address",()=>{
    cy.get("input[placeholder='Name']").type("TestUser");
    cy.get("input[data-qa='signup-email']").type("testuser@email.com");
})

When("I click Signup button",()=>{
    cy.get("button[data-qa='signup-button']").click();
})

Then("I should see Email address already exist! text",()=>{
    cy.get("form[action='/signup']>p").should("contain","Email Address already exist!");
})