@project
Feature: Create a Project

    Validate that a logged in user is able to create a project from this page

    Background:
      Given I am on the login page as a precreated user
      When I log in with my email and password credentials
      Then I should see the Home page

    Scenario: Create Project
      Given I am on the home page
      When I click on the projects icon
      Then I should see the Projects page
      When I click on the New Project button 
      Then I should see a New Project modal with a form containing name, description and ADD button
      When I submit the form with Name and Description for a new project 
      Then I should see that the project is listed correctly after being created
      
