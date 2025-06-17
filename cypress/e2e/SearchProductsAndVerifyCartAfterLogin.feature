Feature: Search Products and Verify Cart After Login

  Scenario: Search products, add to cart, and verify cart after login
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    When I click on the Products button
    Then I should be navigated to the ALL PRODUCTS page successfully
    When I enter a product name in the search input and click the search button
    Then I should see SEARCHED PRODUCTS section
    And I should see all the products related to the search
    When I add the searched products to the cart
    And I click the Cart button
    Then I should see those products in the cart
    When I click the Signup or Login button
    And I submit login details
    And I go to the Cart page again
    Then I should see the previously added products still in the cart after login
