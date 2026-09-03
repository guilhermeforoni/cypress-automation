class LoginPage {
  // 1. Mapeamento dos Seletores
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  }

  // 2. Ações da Página
  visitPage() {
    cy.visit('https://www.saucedemo.com/')
  }

  fillUsername(username) {
    this.elements.usernameInput().type(username)
  }

  fillPassword(password) {
    this.elements.passwordInput().type(password)
  }

  clickLogin() {
    this.elements.loginButton().click()
  }

  // Método utilitário para realizar o login completo de uma vez
  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.clickLogin()
  }

  // 3. Validações da Página
  validateErrorMessage(expectedMessage) {
    this.elements.errorMessage()
      .should('be.visible')
      .and('contain', expectedMessage)
  }
}

export default new LoginPage()