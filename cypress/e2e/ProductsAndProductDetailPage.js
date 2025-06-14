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

When("I click on Products button",()=>{
    rt.clickProducts();
})

Then("I should navigated to ALL PRODUCTS page",()=>{
    rt.navigatedToAllProducts();
})

Then("I should see the product list",()=>{
    cy.get(".features_items").should("be.visible");
    cy.get(".features_items>.col-sm-4").should("have.length.gte",1);
})

When("I click on View Product of first product",()=>{
    rt.viewDetail("Blue Top");
})

Then("I should navigated to product detail page",()=>{
    rt.productDetailVisible();
})

Then("I should see the product name, category, price, availability, condition, brand",()=>{
    cy.get(".product-information>h2").should("contain",rt.productName);
    cy.get(".product-information>p:nth-child(3)").should("contain","Category: Women > Tops");
    cy.get(".product-information>span").should("contain","Rs. 500");
    cy.get(".product-information>p:nth-child(6)").should("contain","Availability: In Stock");
    cy.get(".product-information>p:nth-child(7)").should("contain","Condition: New");
    cy.get(".product-information>p:nth-child(8)").should("contain","Brand: Polo");
})