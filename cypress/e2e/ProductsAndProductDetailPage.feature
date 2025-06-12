Feature: Verify All Products and product detail page

    Scenario: User should able to nevigate to the products page and see the detail of a particular product

        Given I launch the browser and navigate to "https://automationexercise.com"
        Then I should see the homepage
        When I click on Products button
        Then I should navigated to ALL PRODUCTS page
        Then I should see the product list
        When I click on View Product of first product
        Then I should navigated to product detail page
        Then I should see the product name, category, price, availability, condition, brand