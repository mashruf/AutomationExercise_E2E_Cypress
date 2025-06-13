Feature: Search Product

    Scenario: User should be able to search a product

        Given I launch the browser and navigate to "https://automationexercise.com"
         Then I should see the homepage
         When I click Products button
         Then I should be navigated to ALL PRODUCTS page
         When I enter product name in search input and click search button
         Then I should see the SEARCHED PRODUCTS section
         Then I should see all the products related to search