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

When('I add products to the cart',()=>{
    rt.addProductToCart("Blue Top");
    rt.continueShopping();
});

When('I click the Cart button',()=>{
    rt.visitCart();
});

Then('I should see the cart page displayed',()=>{
    rt.cartDisplayed();
});

When('I click the X button corresponding to a product',()=>{
    cy.get(".fa.fa-times").click();
});

Then('I should see that the product is removed from the cart',()=>{
    cy.get(".cart_menu").should("not.be.visible");
});
