/// <reference types="cypress" />



describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(4)
            .contains('Aero Daily Fitness Tee')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10
        
        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
            cy.get('.button-variable-item-XL').click()
            cy.get('.button-variable-item-Red').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });

it('Deve adicionar produtos ao carrinho - Usando Comando Customizado', () => {
    cy.addProdutos('Aero Daily Fitness Tee', 'XL', 'Yellow',  '3')
});

it('Não deve adicionar produtos sem estoque ao carrinho - Usando Comando Customizado', () => {
    cy.addProdutos('Aero Daily Fitness Tee', 'XL', 'Black',  '4')
    cy.get('.single_add_to_cart_button').click()
});
});