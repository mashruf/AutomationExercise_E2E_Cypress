Feature: Place Order with Login Before Checkout

  Scenario: Successfully place an order after logging in before checkout
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    Then I should see the home page visible successfully
    When I click the Signup or Login button
    And I fill email and password and click the Login button
    Then I should see Logged in as username at the top
    When I add products to the cart
    And I click the Cart button
    Then I should see the cart page displayed
    When I click the Proceed To Checkout button
    Then I should see Address Details and Review Your Order
    When I enter a description in the comment text area and click the Place Order button
    And I enter payment details including Name on Card, Card Number, CVC, and Expiration date
    And I click the Pay and Confirm Order button
    Then I should see the success message Your order has been placed successfully
    When I click the Delete Account button
    Then I should see ACCOUNT DELETED and click the Continue button
