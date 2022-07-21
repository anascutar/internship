/// <reference types="cypress" />



describe('Login Test',() => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
    })
    it('Style is successfully coresponding to figma for Login page',()=>{
        cy.get('.sc-iqAclL')
        cy.get('.completed').should('have.css', 'text-decoration', 'line-through')
    cy.get('.completed').should('have.css', 'color', 'rgb(11,37,89)')
    })
    
})