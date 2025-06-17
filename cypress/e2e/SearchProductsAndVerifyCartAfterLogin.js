/// <reference types="cypress" />

import Repeatative from "../../PageObjectModel/repeatative.js";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const rt = new Repeatative();

Given("I launch the browser and navigate to {string}", (url) => {
    cy.visit(url);
})

When('I click on the Products button', () => {
    rt.clickProducts();
});

Then('I should be navigated to the ALL PRODUCTS page successfully', () => {
    rt.navigatedToAllProducts();
});

When('I enter a product name in the search input and click the search button', () => {
    rt.searchProduct("tshirt");
});

Then('I should see SEARCHED PRODUCTS section', () => {
    rt.visibleSearchedProductSection();
});

When('I should see all the products related to the search', () => {
    rt.seeAllProductRelatedToSearch();
});

When('I add the searched products to the cart', () => {
    cy.fixture("searchProduct").then((search) => {
        search.forEach((searchData)=>{
            rt.addProductToCart(searchData.product);
            rt.continueShopping();
        })
    })
});

When('I click the Cart button', () => {
    rt.visitCart();
});

Then('I should see those products in the cart', () => {
    cy.fixture("searchProduct").then((search) => {
        search.forEach((searchData)=>{
            cy.get("tbody>tr>").should("contain",searchData.product);
        })
    })
    
});

When('I click the Signup or Login button', () => {
    rt.clickLoginOrSignup();
});

When('I submit login details', () => {
    cy.fixture("loginInfo").then((login) => {
        cy.get("input[data-qa='login-email']").type(login.email);
        cy.get("input[data-qa='login-password']").type(login.password);
    })
    rt.clickLoginButton();
});

When('I go to the Cart page again', () => {
    rt.visitCart();
});

Then('I should see the previously added products still in the cart after login', () => {
    cy.fixture("searchProduct").then((search) => {
        search.forEach((searchData)=>{
            cy.get("tbody>tr>").should("contain",searchData.product);
        })
    })
});
