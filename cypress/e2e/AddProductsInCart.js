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

When('I click the Products button',()=>{
    rt.clickProducts();
});

When('I hover over the first product and click Add to cart',()=>{
    rt.addProductToCart("Blue Top");
});

When('I click the Continue Shopping button',()=>{
    rt.continueShopping();
});

When('I hover over the second product and click Add to cart',()=>{
    rt.addProductToCart("Men Tshirt");
});

When('I click the View Cart button',()=>{
    rt.viewCart();
});

Then('I should see both products added to the cart',()=>{
    rt.productAddedToCart(2);
});

Then('I should see correct prices, quantities, and total prices for each product',()=>{
    cy.get("#product-1").within(()=>{
        cy.get(".cart_price").should("contain","Rs. 500");
        cy.get(".cart_quantity").should("contain","1");
        cy.get(".cart_total").should("contain","Rs. 500");
    })

    cy.get("#product-2").within(()=>{
        cy.get(".cart_price").should("contain","Rs. 400");
        cy.get(".cart_quantity").should("contain","1");
        cy.get(".cart_total").should("contain","Rs. 400");
    })
});
