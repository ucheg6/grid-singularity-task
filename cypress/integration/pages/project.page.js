export default class LoginPage { 
    // Create variables for element locators
    HomePageHeader = '.header > .headline';
    projectIcon = '.icon-projects';
    newProjectIcon = '.icon-plus';
    projectFormHeader = '.library-name-modal__header';
    formNameLabel = '.input-field > .label > .label__text';
    formDescriptionLabel = '.textarea-field > .label > .label__text';
    nameInputField = '#input-field-name';
    descriptionInputField = '#textarea-field-nameTextArea';
    submitButton = '.library-name-modal__container > .button'
    createdProjectName = ':nth-child(1) > .ConfigurationListHeadWrapper > .saved-project__headline > .saved-project__headline__name > .saved-project__headline__name__text';
    createdProjectDescription = ':nth-child(1) > .ConfigurationListHeadWrapper > .SavedConfigurationListSubheadline > .SavedConfigurationListSubheadline__innerWrapper > .innerWrapper__description';
 
    // Create independent methods to do actions on elements
    getHomePage(){
        cy.get(this.HomePageHeader).should('contain', 'Home')
    }

    navigateToProjectsPage(){
        cy.get(this.projectIcon).click()
    }

    getProjectPage(){
        cy.get(this.HomePageHeader).should('contain', 'Projects')
    }

    displayProjectForm(){
        cy.get(this.newProjectIcon).click()
    }

    checkProjectForm(){
        cy.get(this.projectFormHeader).should('contain', 'New Project')
        cy.get(this.formNameLabel).should('contain', 'Name')
        cy.get(this.formDescriptionLabel).should('contain', 'Description')
    }

    submitForm(){
        cy.get(this.nameInputField).type('Test Energy Project')
        cy.get(this.descriptionInputField).type('This is just a sample energy project')
        cy.get(this.submitButton).click()
    }

    validateCreatedProject(){
        cy.get(this.createdProjectName)
    .should('contain', 'Test Energy Project')

  cy.get(this.createdProjectDescription)
    .should('contain', 'This is just a sample energy project')
    }

}
