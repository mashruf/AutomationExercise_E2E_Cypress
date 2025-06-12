Feature: Verify Test Cases Page

    Scenario: User should able to nevigate to the test cases page

        Given I launch the browser and navigate to "https://automationexercise.com"
        Then I should see the homepage
        When I click on Test Cases button
        Then I should navigated to the test cases page