/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Repeatative from "../../PageObjectModel/repeatative.js";

const rt = new Repeatative();

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
});

Then("I should see the home page visible successfully",()=>{
    rt.homePageVisible();
});

When('I scroll down to the footer',()=>{
    cy.get("#footer").scrollIntoView();
});

Then('I should see the text SUBSCRIPTION',()=>{
    cy.get(".single-widget>h2").should("contain","Subscription");
});

When('I enter an email address in the input field',()=>{
    cy.get("#susbscribe_email").type(rt.email);
});

When('I click the arrow button',()=>{
    cy.get(".fa.fa-arrow-circle-o-right").click();
});

Then('I should see the success message You have been successfully subscribed',()=>{
    cy.get("#success-subscribe").should("contain","You have been successfully subscribed!");
});
