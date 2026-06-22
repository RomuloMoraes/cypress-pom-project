describe('Login', () => {

  it('Should login successfully', () => {

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
      .type('cliente01@teste.com')

    cy.get('[data-testid="senha"]')
      .type('teste')

    cy.get('[data-testid="entrar"]')
      .click()

    cy.get('h1')
      .should('have.text', 'Serverest Store')

  })

  it('Should not login invalid email', () => {

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
      .type('cliente1000@teste.com')

    cy.get('[data-testid="senha"]')
      .type('teste')

    cy.get('[data-testid="entrar"]')
      .click()

    cy.get('[role="alert"] span')
      .should('have.text', '×Email e/ou senha inválidos')

  })

  it('Should not login with blank fields', () => {

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="entrar"]')
      .click()

    cy.contains('[role="alert"]', 'Email é obrigatório')
      .should('be.visible')

    cy.contains('[role="alert"]', 'Password é obrigatório')
      .should('be.visible')

    cy.get('[role="alert"]')
      .should('have.length', 2)

  })

})