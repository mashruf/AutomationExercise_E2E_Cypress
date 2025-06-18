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

When('I click on the Signup or Login button',()=>{
    rt.clickLoginOrSignup();
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

When('I click Proceed To Checkout',()=>{
    rt.checkout();
});

Then('I should see delivery address matches registration info',()=>{
   
    //verify delivery address is visible
    cy.get("#address_delivery").should("be.visible");
    //verify billing address is visible
    cy.get("#address_invoice").should("be.visible");


    //delivery name = billing nae
    cy.get("#address_delivery>.address_firstname").then((delName)=>{
        cy.get("#address_invoice>.address_firstname").then((billName)=>{
            cy.wrap(delName.text()).should("eq",billName.text());
        })
    })


    //delivery address = billing address
    cy.get("#address_delivery>.address_address1").then((delAdd)=>{
        cy.get("#address_invoice>.address_address1").then((billAdd)=>{
            cy.wrap(delAdd.text()).should("eq",billAdd.text());
        })
    })



    //delivery city = billing city
    cy.get("#address_delivery>.address_city").then((delCity)=>{
        cy.get("#address_invoice>.address_city").then((billCity)=>{
            cy.wrap(delCity.text()).should("eq",billCity.text());
        })
    })



    //delivery country = billing country
    cy.get("#address_delivery>.address_country_name").then((delCountry)=>{
        cy.get("#address_invoice>.address_country_name").then((billCountry)=>{
            cy.wrap(delCountry.text()).should("eq",billCountry.text());
        })
    })


    //delivery phone = billing phone
    cy.get("#address_delivery>.address_phone").then((delPhone)=>{
        cy.get("#address_invoice>.address_phone").then((billPhone)=>{
            cy.wrap(delPhone.text()).should("eq",billPhone.text());
        })
    })

});

When('I should see billing address matches registration info',()=>{
    cy.get("#address_invoice>.address_firstname").should("contain",rt.name);
    cy.get("#address_invoice>.address_address1").should("contain",rt.address);
     cy.get("#address_invoice>.address_city").should("contain",rt.zipcode);
     cy.get("#address_invoice>.address_country_name").should("contain",rt.country);
     cy.get("#address_invoice>.address_phone").should("contain",rt.phone);
});

When('I click the Delete Account button',()=>{
    rt.deleteAccount();
});

Then('I should see ACCOUNT DELETED and click Continue button',()=>{
    rt.confirmAccountDeletation();
});
