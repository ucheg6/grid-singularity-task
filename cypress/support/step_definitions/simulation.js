const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const SimulationPage = require('../../integration/pages/simulation');

const simulationPage = new SimulationPage();

Given("I am on the projects page", () => {
  simulationPage.visitProjectsPage()
})

When("I click on the created project", () => {
  simulationPage.openSelectedProject()
})

Then("I should see the New Simulation button", () => {
  simulationPage.getSimulationButton()
})


When("I click on the New Simulation button", () => {
  simulationPage.displaySimulationForm()
})

Then("I should see New Simulation page with a form with default values to create a new simulation", () => {
  simulationPage.checkProjectForm()
})

When("I submit the form with all the default configurations set for a new simulation", () => {
  simulationPage.submitForm()
})

Then("I should see that the simulation configuration is listed correctly", () => {
  simulationPage.validateCreatedSimulation()
})