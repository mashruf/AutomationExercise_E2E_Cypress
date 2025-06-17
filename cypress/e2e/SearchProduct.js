/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Repeatative from "../../PageObjectModel/repeatative.js";

const rt = new Repeatative();

Given("I launch the browser and navigate to {string}",(url)=>{
    cy.visit(url);
})

Then("I should see the homepage",()=>{
    rt.homePageVisible();
})

When("I click Products button",()=>{
    rt.clickProducts();
})

Then("I should be navigated to ALL PRODUCTS page",()=>{
    rt.navigatedToAllProducts();
})

When("I enter product name in search input and click search button",()=>{
    rt.searchProduct("tshirt");
})

Then("I should see the SEARCHED PRODUCTS section",()=>{
    rt.visibleSearchedProductSection();
})

Then("I should see all the products related to search",()=>{
    rt.seeAllProductRelatedToSearch();
})