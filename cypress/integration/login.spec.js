/// <reference types="cypress" />

context ('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/') 
    });

    afterEach(() => {
        cy.screenshot()
    });

    it ('Deve Fazer Login com Sucesso', () =>{
        cy.get('#username') .type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

it ('Deve exibir uma mensagem de erro ao inserir usuario inválido', () =>{ 
    cy.get('#username') .type ('ebac@teste.com')
    cy.get('#password').type ('teste@teste.com')
    cy.get('.woocommerce-form > .button').click() 
    cy.get('.woocommerce-error').should('contain' , 'Erro')

})

    it ('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{ 
        cy.get('#username') .type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro')

})

})