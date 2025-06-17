/// <reference types="cypress" />

import Repeatative from "../../PageObjectModel/repeatative.js";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const rt = new Repeatative();

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

When('I click on the Products button',()=>{
    rt.clickProducts();
});

Then('I should be navigated to the ALL PRODUCTS page successfully',()=>{
    rt.navigatedToAllProducts();
});

When('I click on the View Product button',()=>{
    rt.viewDetail("Men Tshirt");
});

Then('I should see Write Your Review section',()=>{
    cy.get("a[href='#reviews']").should("be.visible");
});

When('I enter name, email and review',()=>{
    cy.get("#name").type(rt.name);
    cy.get("#email").type(rt.email);
    cy.get("#review").type("Hello World!");
});

When('I click the Submit button',()=>{
    cy.get("#button-review").click();
});

Then('I should see the success message Thank you for your review',()=>{
    cy.get(".alert-success.alert").should("contain","Thank you for your review.");
});
