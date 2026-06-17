import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const Chance = require('chance')
const chance = new Chance();



describe('Orange HRM Tests', () => {

  const selectorsList = {
   
  }

  it('User info update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last() )
    myInfoPage.fillEmployeeDetails('employeeID', 'otherIdTest', 'driversLicenseNumber', '2025-07-29')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

})