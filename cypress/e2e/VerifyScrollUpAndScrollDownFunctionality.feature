Feature: Verify Scroll Up and Scroll Down Functionality

  Scenario: Scroll down and up using arrow button
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    Then I should see the home page visible successfully
    When I scroll down to the bottom of the page
    Then I should see SUBSCRIPTION is visible
    When I click on the arrow button to move upward
    Then I should see Full-Fledged practice website for Automation Engineers text is visible on screen
