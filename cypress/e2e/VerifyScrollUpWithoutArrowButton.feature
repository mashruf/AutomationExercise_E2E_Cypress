Feature: Verify Scroll Up Without Arrow Button

  Scenario: Scroll down and manually scroll up
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    Then I should see the home page visible successfully
    When I scroll down to the bottom of the page
    Then I should see SUBSCRIPTION is visible
    When I scroll up manually to the top of the page
    Then I should see Full-Fledged practice website for Automation Engineers text is visible on screen
