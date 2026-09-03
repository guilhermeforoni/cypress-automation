class CheckoutPage {
  // 1. Mapeamento dos Seletores das 3 etapas do Checkout
  elements = {
    // Etapa Carrinho (cart.html)
    checkoutButton: () => cy.get('[data-test="checkout"]'),

    // Etapa Formulario (checkout-step-one.html)
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    errorMessage: () => cy.get('[data-test="error"]'),

    // Etapa Resumo (checkout-step-two.html)
    inventoryItemName: () => cy.get('[data-test="inventory-item-name"]'),
    paymentInfo: () => cy.get('[data-test="payment-info-value"]'),
    shippingInfo: () => cy.get('[data-test="shipping-info-value"]'),
    totalLabel: () => cy.get('[data-test="total-label"]'),
    finishButton: () => cy.get('[data-test="finish"]'),

    // Etapa Confirmacao (checkout-complete.html)
    completeHeader: () => cy.get('[data-test="complete-header"]')
  }

  // 2. Ações do Checkout
  clickCheckout() {
    this.elements.checkoutButton().click()
  }

  fillCheckoutForm(firstName, lastName, postalCode) {
    this.elements.firstNameInput().type(firstName)
    this.elements.lastNameInput().type(lastName)
    this.elements.postalCodeInput().type(postalCode)
  }

  clickContinue() {
    this.elements.continueButton().click()
  }

  clickFinish() {
    this.elements.finishButton().click()
  }

  // 3. Validações da Página
  validateSummaryItem(expectedProductName) {
    this.elements.inventoryItemName().should('have.text', expectedProductName)
    this.elements.paymentInfo().should('be.visible')
    this.elements.shippingInfo().should('be.visible')
    
    // Validação flexível usando Regex para o total
    this.elements.totalLabel()
      .invoke('text')
      .should('match', /Total: \$\d+\.\d{2}/)
  }

  validateOrderCompletion() {
    cy.url().should('include', '/checkout-complete.html')
    this.elements.completeHeader().should('have.text', 'Thank you for your order!')
  }

  validateErrorMessage(expectedMessage) {
    this.elements.errorMessage()
      .should('be.visible')
      .and('contain', expectedMessage)
  }
}

export default new CheckoutPage()