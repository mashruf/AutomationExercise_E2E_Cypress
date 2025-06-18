Feature: Verify Address Details in Checkout Page

  Scenario: Ensure delivery and billing addresses match registration info
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    Then I should see the home page visible successfully
    When I click on the Signup or Login button
    And I fill all details in Signup and create account
    Then I should see ACCOUNT CREATED and click Continue button
    Then I should see Logged in as username at the top
    When I add products to the cart
    And I click the Cart button
    Then I should see the cart page displayed
    When I click Proceed To Checkout
    Then I should see delivery address matches registration info
    And I should see billing address matches registration info
    When I click the Delete Account button
    Then I should see ACCOUNT DELETED and click Continue button
