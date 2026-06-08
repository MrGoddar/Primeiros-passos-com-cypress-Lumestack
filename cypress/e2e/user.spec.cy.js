import userData from '../fixtures/user-data.json'
describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name = 'username']",
    passwordField:"[name = 'password']",
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-title',
    dashboardGrid: '.orangehrm-dashboard-grid > :nth-child(1)',
    wrongCredentialAlert: '.oxd-alert',
    myInfoButton: ':nth-child(6) > .oxd-main-menu-item',
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: ".oxd-input--active",
    
  }



  it.only('User info update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('IdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('05688')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-24-06')
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    cy.get('body').should('contain', 'Successfully Updated')
    
    

  })

  it('login com falha', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})