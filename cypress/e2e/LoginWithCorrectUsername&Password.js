import Login from "../../PageObjectModel/login.js";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/// <reference types="cypress" />

const ln = new Login();

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then("I should see the homepage",()=>{
    ln.homePageVisible();
})

When("I click on Login or Signup button",()=>{
    ln.clickLoginOrSignup();
    ln.createNewUser();//creating new user
    cy.get(".btn.btn-primary").click();
    cy.contains(".nav.navbar-nav>li","Logout").click();//logging out
})

Then("I shold see Login to your account is visible",()=>{
    cy.get(".login-form").should("contain","Login to your account");
})

When("I enter correct email address and password",()=>{
    ln.enterEmailAndPassword();
})

When("I click login button",()=>{
    ln.clickLoginButton();
})

Then("I should see Logged in as username is visible",()=>{
    cy.get("li:nth-child(10) a:nth-child(1)").should("contain","Logged in as "+ln.name);
})

When("I click Delete Account button",()=>{
    cy.get("a[href='/delete_account']").click();
})

Then("I should see ACCOUNT DELETED! is visible",()=>{
    cy.get("h2[class='title text-center'] b").should("contain","Account Deleted!");
})