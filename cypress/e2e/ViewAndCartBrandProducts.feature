Feature: View and Cart Brand Products

  Scenario: Successfully view brand products and switch between brand pages
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    When I click on the Products button
    Then I should see brands visible on the left side bar
    When I click on any brand name
    Then I should be navigated to that brand page and see brand products
    When I click on another brand link from the left side bar
    Then I should be navigated to the new brand page and see its products
