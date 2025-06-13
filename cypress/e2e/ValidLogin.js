import Repeatative from "../../PageObjectModel/repeatative.js";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/// <reference types="cypress" />

const rt = new Repeatative();

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then("I should see the homepage",()=>{
    rt.homePageVisible();
})

When("I click on Login or Signup button",()=>{
    rt.clickLoginOrSignup();
    rt.createNewUser();//creating new user
    cy.get(".btn.btn-primary").click();
    cy.contains(".nav.navbar-nav>li","Logout").click();//logging out
})

Then("I shold see Login to your account is visible",()=>{
    rt.loginPageVisible();
})

When("I enter correct email address and password",()=>{
    rt.enterEmailAndPassword();
})

When("I click login button",()=>{
    rt.clickLoginButton();
})

Then("I should see Logged in as username is visible",()=>{
    rt.loginAsUsername();
})

When("I click Delete Account button",()=>{
    cy.get("a[href='/delete_account']").click();
})

Then("I should see ACCOUNT DELETED! is visible",()=>{
    cy.get("h2[class='title text-center'] b").should("contain","Account Deleted!");
})