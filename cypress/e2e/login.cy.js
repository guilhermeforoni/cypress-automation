import LoginPage from '../support/pages/LoginPage'

describe('SauceDemo - Login (Padrão POM)', () => {

  beforeEach(() => {
    LoginPage.visitPage()
    cy.fixture('users').as('users')
  })

  it('Test-1 - Deve realizar login com sucesso usando credenciais válidas', function () {
    LoginPage.login(this.users.validUser.username, this.users.validUser.password)

    cy.url().should('include', '/inventory.html')
  })

  it('Test-2 - Deve exibir erro ao inserir senha inválida', function () {
    LoginPage.login(this.users.invalidPasswordUser.username, this.users.invalidPasswordUser.password)

    LoginPage.validateErrorMessage('Username and password do not match any user')
  })

  it('Test-3 - Deve exibir erro para usuário bloqueado', function () {
    LoginPage.login(this.users.lockedUser.username, this.users.lockedUser.password)

    LoginPage.validateErrorMessage('Sorry, this user has been locked out.')
  })

})