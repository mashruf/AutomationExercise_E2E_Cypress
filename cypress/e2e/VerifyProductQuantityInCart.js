/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Repeatative from "../../PageObjectModel/repeatative.js";

const rt = new Repeatative();


Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then('I should see the home page visible successfully',()=>{
    rt.homePageVisible();
});

When('I click View Product for any product on the home page',()=>{
    rt.viewDetail("Sleeveless Dress");
});

Then('I should see the product detail page',()=>{
    rt.productDetailVisible();
});

When('I increase the product quantity to 4',()=>{
        cy.get("#quantity").clear().type("4");
});

When('I click the Add to cart button',()=>{
    cy.get(".btn.btn-default.cart").click();
});

When('I click the View Cart button',()=>{
    rt.viewCart();
});

Then('I should see the product in the cart with quantity 4',()=>{
    cy.get(".cart_quantity").should("contain",4);
});
