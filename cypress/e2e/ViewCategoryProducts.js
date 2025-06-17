/// <reference types="cypress" />

import Repeatative from "../../PageObjectModel/repeatative.js";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const rt = new Repeatative();

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then('I should see categories visible on the left side bar',()=>{
    cy.get(".left-sidebar>h2").should("be.visible");
    cy.get("#accordian").should("be.visible");
});

When('I click on the Women category',()=>{
    cy.get("a[href='#Women']").click();
});

When('I click on any category link under the Women category, for example Dress',()=>{
    cy.contains("#Women>.panel-body>ul>li>a","Dress").click();
});

Then('I should see the category page displayed with text WOMEN - TOPS PRODUCTS',()=>{
    cy.get(".features_items>.title.text-center").should("contain","Women - Dress Products"); 
    cy.get(".features_items").should("be.visible");
});

When('I click on any sub-category link under the Men category in the left side bar',()=>{
    cy.get("a[href='#Men']").click();
    cy.contains("#Men>.panel-body>ul>li>a","Jeans").click();
});

Then('I should be navigated to the selected Men category page',()=>{
    cy.get(".title.text-center").should("contain","Men - Jeans Products");
});
