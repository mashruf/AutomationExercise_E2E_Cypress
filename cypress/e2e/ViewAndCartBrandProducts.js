/// <reference types="cypress" />

import Repeatative from "../../PageObjectModel/repeatative.js";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const rt = new Repeatative();


Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

When('I click on the Products button', () => {
    rt.clickProducts();
});

Then('I should see brands visible on the left side bar', () => {
    cy.get(".brands_products").should("be.visible");
});

When('I click on any brand name', () => {
    cy.contains(".brands-name>ul>li","Babyhug").click();
});

Then('I should be navigated to that brand page and see brand products', () => {
    cy.url().should("include","/brand_products/Babyhug");
    cy.get(".features_items>.col-sm-4").should("have.length",4);
});

When('I click on another brand link from the left side bar', () => {
    cy.contains(".brands-name>ul>li","Biba").click();
});

Then('I should be navigated to the new brand page and see its products', () => {
    cy.url().should("include","/brand_products/Biba");
    cy.get(".features_items>.col-sm-4").should("have.length",5);
});
