/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

import Repeatative from '../../PageObjectModel/repeatative.js';

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

const rt = new Repeatative();
const email = faker.internet.email();
const name = "John";

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then("I should see the home page",()=>{
    cy.get(".nav.navbar-nav>li:nth-child(1)").should("contain","Home");
})

When('I click on Signup or Login button',()=>{
    cy.get("a[href='/login']").click();
})

Then('I should see New User Signup! text',()=>{
    cy.get(".signup-form").should("contain","New User Signup!");
})

When("I enter name and email",()=>{
    cy.get("input[placeholder='Name']").type(name);
    cy.get("input[data-qa='signup-email']").type(email);
})

When('I click the Signup button',()=>{
    cy.get("button[data-qa='signup-button']").click();
})

Then('I should see ENTER ACCOUNT INFORMATION text',()=>{
    cy.get(".login-form>.title").should("have.text","Enter Account Information");
})

When("I fill account details",()=>{
    cy.get("#id_gender1").check();
    cy.get("#password").type(1234);
    cy.get("#days").select(1);
    cy.get("#months").select("January");
    cy.get("#years").select("2000");

})

When("I select the newsletter and special offers checkboxes",()=>{
    cy.get("#newsletter").check();
    cy.get("#optin").check();
})

When("I fill address details",()=>{
    cy.get("#first_name").type("John");
    cy.get("#last_name").type("Snow");
    cy.get("#address1").type("Shapla 2");
    cy.get("#country").select("India");
    cy.get("#state").type("Rajsahi");
    cy.get("#city").type("Rajsahi");
    cy.get("#zipcode").type(1400);
    cy.get("#mobile_number").type(1234567890);
    
})

When('I click on Create Account button',()=>{
    cy.get("button[data-qa='create-account']").click();
})

Then('I should see ACCOUNT CREATED! text',()=>{
    rt.accountCreateSuccess();
})

When('I click on Continue button',()=>{
    rt.continue();
})

Then('I should see Logged in as Username text',()=>{
    cy.get("li:nth-child(10) a:nth-child(1)").should("contain","Logged in as John");
})

When('I click on Delete Account button',()=>{
    rt.deleteAccount();
})

Then('I should see ACCOUNT DELETED! text and click Continue button',()=>{
    rt.confirmAccountDeletation();
})

