describe('SauceDemo Login', () => {

    beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Test-1 - should login successfully with valid credentials', () => {

//    cy.get('#user-name')
//      .type('standard_user')

//    cy.get('#password')
//      .type('secret_sauce')

//    cy.get('#login-button')
//      .click()

cy.login(`standard_user`, `secret_sauce`)

    cy.url()
      .should('include', '/inventory.html')

    cy.contains(`Products`)
      .should(`be.visible`)
  })

  it(`Test-2 - should display an error with invalid password`, () => {

//    cy.get('#user-name')
//      .type('standard_user')

//    cy.get('#password')
//      .type('invalid_password')

//    cy.get('#login-button')
//      .click()

cy.login(`standart_user`, `invalid_password`)

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match any user')
  })

})