Feature: Download Invoice After Purchase Order

  Scenario: Successfully download invoice after placing an order
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    Then I should see the home page visible successfully
    When I add products to the cart
    And I click the Cart button as unregistered and unlogged 
    Then I should see the cart page displayed
    When I click Proceed To Checkout
    And I click the Register or Login button
    And I fill all details in Signup and create account
    Then I should see ACCOUNT CREATED and click Continue button
    Then I should see Logged in as username at the top
    When I click the Cart button as registered and logged in
    And I click Proceed To Checkout button
    Then I should see Address Details and Review Your Order
    When I enter description in comment text area and click Place Order
    And I enter payment details and submit
    Then I should see the success message Your order has been placed successfully
    When I click the Download Invoice button
    Then I should verify the invoice is downloaded successfully
    When I click the Continue button
    And I click the Delete Account button
    Then I should see ACCOUNT DELETED and click Continue button
