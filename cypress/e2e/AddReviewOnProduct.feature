Feature: Add Review on Product

  Scenario: Successfully add a review to a product
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    When I click on the Products button
    Then I should be navigated to the ALL PRODUCTS page successfully
    When I click on the View Product button
    Then I should see Write Your Review section
    When I enter name, email and review
    And I click the Submit button
    Then I should see the success message Thank you for your review
