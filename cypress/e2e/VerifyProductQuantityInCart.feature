Feature: Verify Product Quantity in Cart

  Scenario: Add product with specific quantity and verify in cart
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    Then I should see the home page visible successfully
    When I click View Product for any product on the home page
    Then I should see the product detail page
    When I increase the product quantity to 4
    And I click the Add to cart button
    And I click the View Cart button
    Then I should see the product in the cart with quantity 4
