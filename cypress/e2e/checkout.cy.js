describe('SauceDemo - Fluxo de Checkout e Compra', () => {

  beforeEach(() => {
    // 1. Carrega as fixtures de dados
    cy.fixture('users').as('users')

    // 2. Faz o login inicial
    cy.visit('https://www.saucedemo.com/')
    cy.get('@users').then((users) => {
        cy.login(users.validUser.username, users.validUser.password)
    })

    // 3. Garante que está na página de produtos
    cy.url().should('include', '/inventory.html')
  })

  it('Teste 1 - Deve preencher o formulário de checkout e finalizar a compra com sucesso', function () {
    // Adiciona o produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Acessa o carrinho de compras
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', '/cart.html')

    // Clica no botão "Checkout"
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')

    // Preenche as informações do comprador no formulário
    cy.get('[data-test="firstName"]').type(this.users.checkoutInfo.firstName)
    cy.get('[data-test="lastName"]').type(this.users.checkoutInfo.lastName)
    cy.get('[data-test="postalCode"]').type(this.users.checkoutInfo.postalCode)

    // Clica em "Continue" para avançar à visão geral da compra
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')

    // Valida os detalhes do resumo do pedido
    cy.get('[data-test="inventory-item-name"]').should('have.text','Sauce Labs Backpack')
    cy.get('[data-test="payment-info-label"]').should('be.visible')
    cy.get('[data-test="shipping-info-label"]').should('be.visible')
    cy.get('[data-test="total-label"]').should('be.visible').and('not.be.empty')

    // Finaliza o pedido
    cy.get('[data-test="finish"]').click()

    // Validações da tela de confirmação do pedido
    cy.url().should('include','/checkout-complete.html')
    cy.get('[data-test="title"]').should('be.visible').should('have.text', 'Checkout: Complete!')
    cy.get('[data-test="complete-header"]').should('have.text','Thank you for your order!')
    cy.get('[data-test="complete-text"]').should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!')


  })

  it('Deve exibir mensagem de erro ao tentar avançar no checkout sem preencher os campos', function () {
    // Adiciona o produto e vai até a etapa 1 do checkout
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    // Tenta continuar sem preencher os campos obrigatórios
    cy.get('[data-test="continue"]').click()

    // Valida mensagem de erro indicando que First Name é obrigatório
    cy.get('[data-test="error"]')
    .should('be.visible')
    .should('have.text', 'Error: First Name is required')
    .should('contain', 'Error')

  })

})