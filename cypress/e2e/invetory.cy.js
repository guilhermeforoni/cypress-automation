describe('SauceDemo - Carrinho de Compras', () => {

    beforeEach(() => {
     // 1. Carrega a fixture com os dados do usuário   
    cy.fixture('users').as('users')
     
     // 2. Acessa o site e realiza o login antes de cada teste de produto
     cy.visit('https://www.saucedemo.com/')
     cy.get('@users').then((users) =>{
        cy.login(users.validUser.username, users.validUser.password)
     })
     // 3. Garante que o login concluiu com sucesso antes de iniciar o teste
     cy.url().should('include', '/inventory.html')
    })


it('Teste 1 - Deve adicionar um produto ao carrinho com sucesso', () => {
    // Adiciona a "Sauce Labs Backpack" ao carrinho usando o seletor data-test
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Verifica que quando clicar para adicionar produto, o icone do carrinho de compras muda e mostra o texto 1
    // o "have,text" é um asserção já embutida no Cypress que lê a propriedade de texto
    cy.get('[data-test="shopping-cart-badge"]')
    .should('be.visible')
    .and('have.text', '1')

})

it('Teste 2 - Deve remover um produto do carrinho na tela de inventário', () =>{
    // Adicionando o produto primeiro
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', '1')

    // Removendo o produto
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    // Validando se o contador do carrinho foi removido
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')

    //Validando que o botão do produto voltou a ser "Add to cart"
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
})

it('Teste 3 - Validação do produto dentro da página do carrinho de compras', () =>{
    // Adicionando o produto e validando icone alterado do carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', '1')
    cy.get('[data-test="shopping-cart-link"]').click()

    // Validando direcionando da pagina
    cy.url().should('include', '/cart.html')

    // Validando se o item correto foi adicionado na lista de compras
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
})

})