describe('SauceDemo Login', () => {

  it('Test-1 - should login successfully with valid credentials', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name')
      .type('standard_user')

    cy.get('#password')
      .type('secret_sauce')

    cy.get('#login-button')
      .click()

    cy.url()
      .should('include', '/inventory.html')

    cy.contains(`Products`)
      .should(`be.visible`)
  })

  it(`Test-2 - should display an error with invalid password`, () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name')
      .type('standard_user')

    cy.get('#password')
      .type('invalid_password')

    cy.get('#login-button')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match any user')
  })

})