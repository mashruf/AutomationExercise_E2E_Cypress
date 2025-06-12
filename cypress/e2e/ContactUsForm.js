/// <reference types="cypress" />

import LoginOrSignup from "../../PageObjectModel/loginOrSignup.js";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { faker } from "@faker-js/faker";
const subject = faker.lorem.sentence();
const message = faker.lorem.paragraph();

const ln = new LoginOrSignup();

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then("I should see the homepage",()=>{
    ln.homePageVisible();
})

When("I click on Contact Us button",()=>{
    cy.contains(".nav.navbar-nav>li","Contact us").click();
})

Then("I should see GET IN TOUCH",()=>{
    cy.get(".contact-form>.title").should("contain","Get In Touch");
})

When("I enter name, email, subject and message",()=>{
    cy.get("input[placeholder='Name']").type(ln.name);
    cy.get("input[placeholder='Email']").type(ln.email);
    cy.get("input[placeholder='Subject']").type(subject);
    cy.get("#message").type(message);
})

When("I upload file",()=>{
    cy.get("input[name='upload_file']").attachFile("test.txt");
})

When("I click Submit button",()=>{
    cy.get("input[value='Submit']").click();
})

When("I accept the alert",()=>{
    cy.on("window:alert",(t)=>{
        expect(t).to.have.text("Press OK to proceed!");
    })
})

Then("I should see Success! Your details have been submitted successfully.",()=>{
    cy.get(".status.alert.alert-success").should("contain","Success! Your details have been submitted successfully.");
})

When("I click Home button",()=>{
    cy.get("a[class='btn btn-success']").click();
})

Then("I should redirected to homepage",()=>{
    ln.homePageVisible();
})