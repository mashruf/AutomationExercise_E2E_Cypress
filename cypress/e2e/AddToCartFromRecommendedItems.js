/// <reference types="cypress" />

import Repeatative from "../../PageObjectModel/repeatative.js";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const rt = new Repeatative();

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

When('I scroll to the bottom of the page',()=>{
    cy.get(".recommended_items").scrollIntoView();
});

Then('I should see RECOMMENDED ITEMS visible',()=>{
    cy.contains(".title.text-center","recommended items").should("be.visible");
});

When('I click on Add To Cart on a recommended product',()=>{
    rt.addProductToCart("Stylish Dress");
    rt.continueShopping();
});

When('I click on the View Cart button',()=>{
    rt.visitCart();
});

Then('I should see the product displayed on the cart page',()=>{
    cy.contains(".cart_description","Stylish Dress").should("be.visible");
});
