Feature: Contact Us Form

    Scenario: User will be able to fill the Contact Us form and submit it

        Given I launch the browser and navigate to "https://automationexercise.com"
        Then I should see the homepage
        When I click on Contact Us button
        Then I should see GET IN TOUCH
        When I enter name, email, subject and message
        And I upload file
        And I click Submit button
        And I accept the alert
        Then I should see Success! Your details have been submitted successfully.
        When I click Home button
        Then I should redirected to homepage