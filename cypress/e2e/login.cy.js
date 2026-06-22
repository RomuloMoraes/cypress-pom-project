import LoginPage from '../pages/LoginPages'

describe('Login', () => {

  it('Should login successfully', () => {
    LoginPage.visit()
    LoginPage.login('cliente01@teste.com', 'teste')
    LoginPage.validateHomeTitle('Serverest Store')
  })


  it('Should not login invalid credentials', () => {
    LoginPage.visit()
    LoginPage.login('cliente1000@teste.com', 'teste')
    LoginPage.validateAlertMessage('×Email e/ou senha inválidos')
  })

  it('Should not login with blank fields', () => {

    LoginPage.visit()
    LoginPage.clickLogin()
    LoginPage.validateAlertMessage('Email é obrigatório')
    LoginPage.validateAlertMessage('Password é obrigatório')
    LoginPage.validateAlertQuantity(2)
  })

})