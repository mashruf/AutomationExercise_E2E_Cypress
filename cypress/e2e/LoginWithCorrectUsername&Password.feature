Feature: Login User with correct email and password

    Scenario: User should be able to login using correct email and password, verify login and delete it

        Given I launch the browser and navigate to "https://automationexercise.com"
        Then I should see the homepage
        When I click on Login or Signup button
        Then I shold see Login to your account is visible
        When I enter correct email address and password
        And I click login button
        Then I should see Logged in as username is visible
        When I click Delete Account button
        Then I should see ACCOUNT DELETED! is visible 