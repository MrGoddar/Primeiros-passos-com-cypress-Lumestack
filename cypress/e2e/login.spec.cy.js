import userData from '../fixtures/user-data.json'
describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name = 'username']",
    passwordField:"[name = 'password']",
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-title',
    dashboardGrid: '.orangehrm-dashboard-grid > :nth-child(1)',
    wrongCredentialAlert: '.oxd-alert'
  }



  it('login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

  it('login com falha', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})