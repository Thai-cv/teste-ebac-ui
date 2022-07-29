/// <reference types="cypress" />

const perfil = require ('../fixtures/perfil.json')

context ('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit ('minha-conta') 
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve Fazer Login com Sucesso', () =>{
        cy.get('#username') .type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

it('Deve Fazer login com Sucesso - Usando arquivo de Dados', () => {
    
    cy.get('#username') .type (perfil.usuario)
    cy.get('#password').type (perfil.senha)
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain' , 'Minha conta')
});

it('Deve Fazer login com Sucesso - Usando fixture', () => {
    cy.fixture ('perfil').then(dados =>{
        cy.get('#username') .type (dados.usuario)
        cy.get('#password').type (dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
    
        cy.get('.page-title').should('contain' , 'Minha conta')

    })
});

it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () =>{ 
    cy.get('#username') .type ('ebac@teste.com')
    cy.get('#password').type ('teste@teste.com')
    cy.get('.woocommerce-form > .button').click() 
    cy.get('.woocommerce-error').should('contain' , 'Erro')

})

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{ 
        cy.get('#username') .type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro')

})

})