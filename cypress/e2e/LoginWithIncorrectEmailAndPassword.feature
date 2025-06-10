Feature: Login User with correct email and password

    Scenario: User should not be able to login using incorrect email and password

        Given I launch the browser and navigate to "https://automationexercise.com"
        Then I should see the homepage
        When I click on Login or Signup button
        Then I shold see Login to your account is visible
        When I enter incorrect email address and password
        And I click login button
        Then I should see Your email or password is incorrect! is visible 