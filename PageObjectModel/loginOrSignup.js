import { faker } from "@faker-js/faker";

class LoginOrSignup{
    email = faker.internet.email();
    name = faker.person.firstName();
    password = 1234;

    homePageVisible(){
        cy.get(".nav.navbar-nav>li:nth-child(1)").should("contain","Home");
    }

    clickLoginOrSignup() {
        cy.contains(".nav.navbar-nav>li", " Signup / Login").click();
    }

    createNewUser() {
        cy.get("input[placeholder='Name']").type(this.name);
        cy.get("input[data-qa='signup-email']").type(this.email);
        cy.get("button[data-qa='signup-button']").click();
        cy.get("#id_gender1").check();
        cy.get("#password").type(this.password);
        cy.get("#days").select(1);
        cy.get("#months").select("January");
        cy.get("#years").select("2000");
        cy.get("#newsletter").check();
        cy.get("#optin").check();
        cy.get("#first_name").type(this.name);
        cy.get("#last_name").type("Snow");
        cy.get("#address1").type("Shapla 2");
        cy.get("#country").select("India");
        cy.get("#state").type("Rajsahi");
        cy.get("#city").type("Rajsahi");
        cy.get("#zipcode").type(1400);
        cy.get("#mobile_number").type(1234567890);
        cy.get("button[data-qa='create-account']").click();
    }
    

    enterEmailAndPassword(){
        cy.get("input[data-qa='login-email']").type(this.email);
        cy.get("input[data-qa='login-password']").type(this.password);
    }

    clickLoginButton(){
        cy.get("button[data-qa='login-button']").click();
    }


}

export default LoginOrSignup;