export default class LoginPage { 
    // Create variables for element locators
    url = 'https://www.d3a.io/projects';
    HomePageHeader = '.header > .headline';
    selectedProject = ':nth-child(1) > .ConfigurationListHeadWrapper > .saved-project__headline > .saved-project__headline__name > .saved-project__headline__carat > .svg-icon > .icon-carat';
    simulationButtonLabel = '.configurations > .button > .button__label';
    simulationButton = '.configurations > .button > .button__icon > .svg-icon > .icon-plus';
    formTitle = '#input-field-name';
    formDescription = '#textarea-field-description';
    submitButton = '.button';
    simulationName = '.saved-config--pct-width__title__name > p';
    simulationDescription = '.saved-config--pct-width__title__description';
    marketsValue = '.saved-config--pct-width__areas';
    devicesValue = '.saved-config--pct-width__devices';

    // Create independent methods to do actions on elements
    visitProjectsPage(){
        cy.visit(this.url);
        cy.get(this.HomePageHeader).should('contain', 'Projects')
    }

    openSelectedProject(){
        cy.get(this.selectedProject).click()
    }

    getSimulationButton(){
        cy.get(this.simulationButtonLabel).should('have.text', ' new simulation ')
    }

    displaySimulationForm(){
        cy.get(this.simulationButton).click()
    }

    checkProjectForm(){
        cy.get(this.HomePageHeader).should('contain', 'New Simulation')
        cy.get(this.formTitle).should('have.value', 'default simulation')
        cy.get(this.formDescription).type('sample simulation description')
    }

    submitForm(){
        cy.get(this.submitButton).click()
    }

    validateCreatedSimulation(){
        cy.visit(this.url);
        cy.get(this.selectedProject).click()
      
        cy.get(this.simulationName)
          .contains('default simulation')
      
          cy.get(this.simulationDescription)
          .contains('sample simulation description')
      
        cy.get(this.marketsValue)
          .contains('0')
      
        cy.get(this.devicesValue)
          .contains('0')
    }

}
