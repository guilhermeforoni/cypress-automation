class InventoryPage {
  elements = {
    titleProducts: () => cy.contains('Products'),
    backpackAddToCartBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    backpackRemoveBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    cartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
    cartLink: () => cy.get('[data-test="shopping-cart-link"]')
  }

  addBackpackToCart() {
    this.elements.backpackAddToCartBtn().click()
  }

  removeBackpackFromCart() {
    this.elements.backpackRemoveBtn().click()
  }

  goToCart() {
    this.elements.cartLink().click()
  }

  validateCartBadgeCount(count) {
    this.elements.cartBadge()
      .should('be.visible')
      .and('have.text', count)
  }

  validateCartBadgeNotExist() {
    this.elements.cartBadge().should('not.exist')
  }
}

export default new InventoryPage()