Feature: View Category Products

  Scenario: Successfully view products by selecting categories
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    Then I should see categories visible on the left side bar
    When I click on the Women category
    And I click on any category link under the Women category, for example Dress
    Then I should see the category page displayed with text WOMEN - TOPS PRODUCTS
    When I click on any sub-category link under the Men category in the left side bar
    Then I should be navigated to the selected Men category page
