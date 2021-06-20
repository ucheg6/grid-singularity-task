@login
Feature: D3A Login Page
   
    Validate that a precreated user is able to login to d3a.io
    
    Scenario: Login Precreated Created user
      Given I am on the login page as a precreated user
      When I log in with my email and password credentials
      Then I should see the Home page
      
      
