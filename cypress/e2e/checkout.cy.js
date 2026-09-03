import LoginPage from '../support/pages/LoginPage.js'
import InventoryPage from '../support/pages/InventoryPage.js'
import CheckoutPage from '../support/pages/CheckoutPage.js'

describe('SauceDemo - Fluxo de Checkout (Padrão POM)', () => {

  beforeEach(() => {
    LoginPage.visitPage()
    cy.fixture('users').as('users')

    cy.get('@users').then((users) => {
      LoginPage.login(users.validUser.username, users.validUser.password)
    })

    cy.url().should('include', '/inventory.html')
  })

  it('Deve preencher o formulário e finalizar a compra com sucesso', function () {
    // Adiciona o produto e navega até o carrinho
    InventoryPage.addBackpackToCart()
    InventoryPage.goToCart()

    // Fluxo de checkout usando a nova classe
    CheckoutPage.clickCheckout()
    CheckoutPage.fillCheckoutForm(
      this.users.checkoutInfo.firstName,
      this.users.checkoutInfo.lastName,
      this.users.checkoutInfo.postalCode
    )
    CheckoutPage.clickContinue()

    // Valida o resumo e finaliza
    CheckoutPage.validateSummaryItem('Sauce Labs Backpack')
    CheckoutPage.clickFinish()

    // Valida a tela de obrigado
    CheckoutPage.validateOrderCompletion()
  })

  it('Deve exibir mensagem de erro ao tentar avançar no checkout sem preencher os campos', function () {
    InventoryPage.addBackpackToCart()
    InventoryPage.goToCart()

    CheckoutPage.clickCheckout()
    CheckoutPage.clickContinue()

    CheckoutPage.validateErrorMessage('Error: First Name is required')
  })

})