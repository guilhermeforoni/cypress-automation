import LoginPage from '../support/pages/LoginPage.js'
import InventoryPage from '../support/pages/InventoryPage.js'

describe('SauceDemo - Testes do Catálogo e Carrinho (Padrão POM)', () => {

  beforeEach(() => {
    // 1. Visita a página inicial e carrega a fixture
    LoginPage.visitPage()
    cy.fixture('users').as('users')

    // 2. Faz login com usuário válido
    cy.get('@users').then((users) => {
      LoginPage.login(users.validUser.username, users.validUser.password)
    })

    // 3. Valida que está na página de produtos
    cy.url().should('include', '/inventory.html')
  })

  it('Deve adicionar um produto ao carrinho com sucesso', function () {
    // Adiciona a mochila ao carrinho
    InventoryPage.addBackpackToCart()

    // Valida se o contador do carrinho exibiu o número 1
    InventoryPage.validateCartBadgeCount('1')
  })

  it('Deve remover um produto do carrinho com sucesso', function () {
    // Adiciona e depois remove a mochila
    InventoryPage.addBackpackToCart()
    InventoryPage.removeBackpackFromCart()

    // Valida se o ícone do contador desapareceu do carrinho
    InventoryPage.validateCartBadgeNotExist()
  })

  it('Deve navegar para a tela do carrinho ao clicar no ícone do carrinho', function () {
    InventoryPage.goToCart()

    // Valida navegação para a página do carrinho
    cy.url().should('include', '/cart.html')
  })

})