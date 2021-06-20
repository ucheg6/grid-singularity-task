const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const ProjectPage = require('../../integration/pages/project.page');

const projectPage = new ProjectPage();

Given("I am on the home page", () => {
  projectPage.getHomePage()
})

When("I click on the projects icon", () => {
  projectPage.navigateToProjectsPage()
})

Then("I should see the Projects page", () => {
  projectPage.getProjectPage()
})

When("I click on the New Project button", () => {
  projectPage.displayProjectForm()
})

Then("I should see a New Project modal with a form containing name, description and ADD button", () => {
  projectPage.checkProjectForm()
})

When("I submit the form with Name and Description for a new project", () => {
  projectPage.submitForm()
})

Then("I should see that the project is listed correctly after being created", () => {
  projectPage.validateCreatedProject()
})
