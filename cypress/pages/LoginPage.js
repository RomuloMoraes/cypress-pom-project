class LoginPage {
    elements = {
        txtEmail: () => cy.get('[data-testid="email"]'),
        txtPassword: () => cy.get('[data-testid="senha"]'),
        btnLogin: () => cy.get('[data-testid="entrar"]'),
        alertMessage: () => cy.get('[role="alert"]')
    }

    visit() {
        cy.visit('/login')
    }

    fillEmail(email) {
        this.elements.txtEmail().type(email)
    }

    fillPassword(password) {
        this.elements.txtPassword().type(password)
    }

    clickLogin() {
        this.elements.btnLogin().click()
    }

    login(email, password) {
        this.fillEmail(email)
        this.fillPassword(password)
        this.clickLogin()
    }

    validateHomeTitle(title) {
        cy.get('h1')
            .should('have.text', title)
    }

    validateAlertMessage(message) {
        cy.contains('[role="alert"]', message)
            .should('be.visible')
    }

    validateAlertQuantity(quantity) {
        this.elements.alertMessage()
            .should('have.length', quantity)
    }
}

export default new LoginPage()