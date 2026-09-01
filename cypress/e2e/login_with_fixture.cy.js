describe('SauceDemo Login', () => {

  beforeEach(() => {
    // 1. Acessa a página do sistema
    cy.visit('https://www.saucedemo.com/')

    // 2. Carrega a fixture users.json e atribui o conteúdo ao contexto 'this.users'
    cy.fixture('users').as('users')
  })

  // Usamos function() tradicional para ter acesso ao 'this.users'
  it('Test-1 - should login successfully with valid credentials', function () {
    cy.login(this.users.validUser.username, this.users.validUser.password)

    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  it('Test-2 - should display an error with invalid password', function () {
    cy.login(this.users.invalidPasswordUser.username, this.users.invalidPasswordUser.password)

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match any user')
  })

  it('Test-3 - should display an error for locked out user', function () {
    cy.login(this.users.lockedUser.username, this.users.lockedUser.password)

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.')
  })

})