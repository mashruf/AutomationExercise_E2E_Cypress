Feature: Register User

    Scenario: User should be able signup, verify account and delete it
        Given I launch the browser and navigate to "https://automationexercise.com"
        Then I should see the home page
        When I click on "Signup or Login" button
        Then I should see "New User Signup!" text
        When I enter name and email
        And I click the "Signup" button
        Then I should see "ENTER ACCOUNT INFORMATION" text
        When I fill account details
        And I select the newsletter and special offers checkboxes
        And I fill address details
        And I click on "Create Account" button
        Then I should see "ACCOUNT CREATED!" text
        When I click on "Continue" button
        Then I should see "Logged in as TestUser" text
        When I click on "Delete Account" button
        Then I should see "ACCOUNT DELETED!" text and click "Continue" button
    