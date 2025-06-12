import { faker } from "@faker-js/faker";

class LoginOrSignup{

    email = faker.internet.email();//creating email for signup
    name = faker.person.firstName();//creating name for user
    password = 1234;

    //verify the homepage is visible
    homePageVisible(){
        cy.get(".nav.navbar-nav>li:nth-child(1)").should("contain","Home");
    }

    //to click the Signup or login button
    clickLoginOrSignup() {
        cy.contains(".nav.navbar-nav>li", " Signup / Login").click();
    }

    //verify login page is visible
    loginPageVisible(){
        cy.get(".login-form").should("contain","Login to your account");
    }

    //verify signup page is visible
    signupPageVisible(){
        cy.get(".signup-form").should("contain","New User Signup!");
    }

    //create a user from the signup page
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
    

    //enter email and password in the login page
    enterEmailAndPassword(){
        cy.get("input[data-qa='login-email']").type(this.email);
        cy.get("input[data-qa='login-password']").type(this.password);
    }

    //click login button after entering email and password in the login page
    clickLoginButton(){
        cy.get("button[data-qa='login-button']").click();
    }

    //verify the user is logged in
    loginAsUsername(){
        cy.get("li:nth-child(10) a:nth-child(1)").should("contain","Logged in as "+this.name);
    }
    
    //logout from user account
    logout(){
        cy.contains(".nav.navbar-nav>li","Logout").click();
    }

}

export default LoginOrSignup;