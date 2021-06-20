@project
Feature: Create a Simulation

    Validate that, if the project in testcase 2 has been created successfully, a logged in user can create a simulation (button "New Simulation" in the project view). 

    Background:
      Given I am on the login page as a precreated user
      When I log in with my email and password credentials
      Then I should see the Home page

    Scenario:
      Given I am on the home page
      When I click on the projects icon
      Then I should see the Projects page
      When I click on the New Project button 
      Then I should see a New Project modal with a form containing name, description and ADD button
      When I submit the form with Name and Description for a new project 
      Then I should see that the project is listed correctly after being created

    Scenario: Create Simulation
      Given I am on the projects page
      When I click on the created project
      Then I should see the New Simulation button
      When I click on the New Simulation button 
      Then I should see New Simulation page with a form with default values to create a new simulation
      When I submit the form with all the default configurations set for a new simulation
      Then I should see that the simulation configuration is listed correctly
      
