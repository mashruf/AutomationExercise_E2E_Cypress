Feature: Add to Cart from Recommended Items

  Scenario: Successfully add a recommended product to cart
    
    Given I launch the browser and navigate to "https://automationexercise.com"
    When I scroll to the bottom of the page
    Then I should see RECOMMENDED ITEMS visible
    When I click on Add To Cart on a recommended product
    And I click on the View Cart button
    Then I should see the product displayed on the cart page
