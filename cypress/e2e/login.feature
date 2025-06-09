Feature: Orange HRM Login Feature


    Through this feature user should be able to login to the website


    Scenario: User should be able to login using valid credentials
      Given Visit Orange HRM website
      When User provide username
      And User provide password
      And User click the submit button
      Then User should see the dashboard