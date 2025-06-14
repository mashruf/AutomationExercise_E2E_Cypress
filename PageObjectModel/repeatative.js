import { faker } from "@faker-js/faker";

class Repeatative {

    email = faker.internet.email();//creating email for signup
    name = faker.person.firstName();//creating name for user
    password = 1234;

    //verify the homepage is visible
    homePageVisible() {
        cy.get(".nav.navbar-nav>li:nth-child(1)").should("contain", "Home");
    }

    //to click the Signup or login button
    clickLoginOrSignup() {
        cy.contains(".nav.navbar-nav>li", " Signup / Login").click();
    }

    //verify login page is visible
    loginPageVisible() {
        cy.get(".login-form").should("contain", "Login to your account");
    }

    //verify signup page is visible
    signupPageVisible() {
        cy.get(".signup-form").should("contain", "New User Signup!");
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
    enterEmailAndPassword() {
        cy.get("input[data-qa='login-email']").type(this.email);
        cy.get("input[data-qa='login-password']").type(this.password);
    }

    //click login button after entering email and password in the login page
    clickLoginButton() {
        cy.get("button[data-qa='login-button']").click();
    }

    //verify the user is logged in
    loginAsUsername() {
        cy.get("li:nth-child(10) a:nth-child(1)").should("contain", "Logged in as " + this.name);
    }

    //click delete account to delete an account
    deleteAccount() {
        cy.get("a[href='/delete_account']").click();
    }

    //confirm account deletation and click continue button
    confirmAccountDeletation() {
        cy.get("h2[class='title text-center'] b").should("contain", "Account Deleted!");
        cy.get(".btn.btn-primary").click();
    }
    //logout from user account
    logout() {
        cy.contains(".nav.navbar-nav>li", "Logout").click();
    }

    //click on products
    clickProducts() {
        cy.contains(".nav.navbar-nav>li", "Products").click();
    }

    //verify nevigation to all products page successfull
    navigatedToAllProducts() {
        cy.get(".title.text-center").should("contain", "All Products");
    }

    //navigate to product detail page
    viewDetail(productName) {
        this.productName = productName;
        cy.contains(".features_items>.col-sm-4", productName).within(() => {
            cy.get(".choose>.nav>li>a").click();
        })
    }

    //specific product details page visible or not 
    productDetailVisible() {
        cy.get(".product-details").find("h2").should("contain", this.productName);
    }

    //go to cart
    visitCard(){
        cy.contains(".nav.navbar-nav>li", "Cart").click();
    }

    //add product to cart
    addProductToCart(productName) {
        cy.contains(".features_items>.col-sm-4", productName).realHover().within(() => {
            cy.get(".product-overlay>.overlay-content>a").click({ waitForAnimations: false });
        })


    }

    //click continue shopping button after adding product to card
    continueShopping() {
        cy.get(".btn.btn-success.close-modal.btn-block").click();
    }

    //click view cart on modal
    viewCart() {
        cy.get(".modal-content>.modal-body>p>a").click();
    }

    productAddedToCart(length) {
        cy.get(".btn.btn-default.check_out").should("be.visible");
        cy.get("tbody>tr").should("have.length", length);
    }
}

export default Repeatative;