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

When('I click the Signup or Login button',()=>{
    rt.clickLoginOrSignup();
});

When('I fill all details in Signup and create an account',()=>{
    rt.createNewUser();
});

Then('I should see ACCOUNT CREATED and click the Continue button',()=>{
    rt.accountCreateSuccess();
    rt.continue();
});

Then('I should see Logged in as username at the top',()=>{
    rt.loginAsUsername();
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

When('I click the Proceed To Checkout button',()=>{
    rt.checkout();
});

Then('I should see Address Details and Review Your Order',()=>{
    rt.verifyAddressAndReviewOrder();
});

When('I enter a description in the comment text area and click the Place Order button',()=>{
    rt.enterCommentAndPlaceOrder();
});

When('I enter payment details including Name on Card, Card Number, CVC, and Expiration date',()=>{
    rt.enterCard();
});

When('I click the Pay and Confirm Order button',()=>{
    rt.payAndConfirm();
});

Then('I should see the success message Your order has been placed successfully',()=>{
    rt.orderConfirm();
});

When('I click the Delete Account button',()=>{
    rt.deleteAccount();
});

Then('I should see ACCOUNT DELETED and click the Continue button',()=>{
    rt.confirmAccountDeletation();
});
