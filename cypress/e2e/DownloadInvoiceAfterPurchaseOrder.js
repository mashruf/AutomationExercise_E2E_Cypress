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

When('I click the Cart button as unregistered and unlogged',()=>{
    rt.visitCart();
});

Then('I should see the cart page displayed',()=>{
    rt.cartDisplayed();
});

When('I click Proceed To Checkout',()=>{
    rt.checkout();
});

When('I click the Register or Login button',()=>{
    cy.get(".modal-content>.modal-body>p>a").click();
});

When('I fill all details in Signup and create account',()=>{
    rt.createNewUser();
});

Then('I should see ACCOUNT CREATED and click Continue button',()=>{
    rt.accountCreateSuccess();
    rt.continue();
});

Then('I should see Logged in as username at the top',()=>{
    rt.loginAsUsername();
});

When('I click the Cart button as registered and logged in',()=>{
    rt.visitCart();
});

When('I click Proceed To Checkout button',()=>{
    rt.checkout();
});

Then('I should see Address Details and Review Your Order',()=>{
    rt.verifyAddressAndReviewOrder();
});

When('I enter description in comment text area and click Place Order',()=>{
    rt.enterCommentAndPlaceOrder();
});

When('I enter payment details and submit',()=>{
    rt.enterCard();
    rt.payAndConfirm();
});

Then('I should see the success message Your order has been placed successfully',()=>{
    rt.orderConfirm();
    cy.go(1);
});

When('I click the Download Invoice button',()=>{
    cy.get(".btn.btn-default.check_out").click();
});

Then('I should verify the invoice is downloaded successfully',()=>{
    cy.readFile("cypress/downloads/invoice.txt").should("exist");
});

When('I click the Continue button',()=>{
    rt.continue();
});

When('I click the Delete Account button',()=>{
    rt.deleteAccount();
});

Then('I should see ACCOUNT DELETED and click Continue button',()=>{
    rt.confirmAccountDeletation();
});
