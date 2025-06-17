Feature: Remove Products From Cart

  Scenario: Successfully remove a product from the cart
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    Then I should see the home page visible successfully
    When I add products to the cart
    And I click the Cart button
    Then I should see the cart page displayed
    When I click the X button corresponding to a product
    Then I should see that the product is removed from the cart
