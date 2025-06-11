Feature: Register User with existing email

    Scenario: User should not be able to register with an existing email

        Given I launch the browser and navigate to "https://automationexercise.com"
        Then I should see the homepage
        When I click on Login or Signup button
        Then I should see New User Signup! text
        When I enter name and already registered email address
        And I click Signup button
        Then I should see Email address already exist! text
