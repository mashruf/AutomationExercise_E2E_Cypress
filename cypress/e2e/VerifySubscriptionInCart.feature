Feature: Verify Subscription in Cart Page

  Scenario: Verify successful subscription functionality on cart page
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    Then I should see the home page visible successfully
    When I click the Cart button
    And I scroll down to the footer
    Then I should see the text SUBSCRIPTION
    When I enter an email address in the input field
    And I click the arrow button
    Then I should see the success message You have been successfully subscribed
