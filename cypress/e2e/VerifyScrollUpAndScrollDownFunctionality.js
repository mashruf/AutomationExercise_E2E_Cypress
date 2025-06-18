/// <reference types="cypress" />

import Repeatative from "../../PageObjectModel/repeatative.js";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const rt = new Repeatative();


Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then('I should see the home page visible successfully',()=>{
    rt.homePageVisible();
});

When('I scroll down to the bottom of the page',()=>{
    cy.get("#footer").scrollIntoView();
});

Then('I should see SUBSCRIPTION is visible',()=>{
    cy.get(".single-widget").should("be.visible");
});

When('I click on the arrow button to move upward',()=>{
    cy.get("#scrollUp").click();
});

Then('I should see Full-Fledged practice website for Automation Engineers text is visible on screen',()=>{
    cy.contains("h2","Full-Fledged practice website for Automation Engineers").should("be.visible");
});
