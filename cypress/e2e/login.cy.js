import LoginPage from '../pages/LoginPages'

describe('Login', () => {

  it('Should login successfully', () => {

    const user = {
      nome: 'Usuario Teste',
      email: `usuario${Date.now()}@teste.com`,
      password: 'teste',
      administrador: 'false'
    }

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: user
    }).then((response) => {
      expect(response.status).to.eq(201)
    })

    LoginPage.visit()
    LoginPage.login(user.email, user.password)
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