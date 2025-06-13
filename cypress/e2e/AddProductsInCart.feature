Feature: Add Products to Cart

  Scenario: Verify products can be added to cart with correct details
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    Then I should see the home page visible successfully
    When I click the Products button
    And I hover over the first product and click Add to cart
    And I click the Continue Shopping button
    And I hover over the second product and click Add to cart
    And I click the View Cart button
    Then I should see both products added to the cart
    And I should see correct prices, quantities, and total prices for each product
