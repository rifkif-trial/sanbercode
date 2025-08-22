describe ('Scenario Login', () => {
    it('TC001-Valid Login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('.submit-button.btn_action').click()
        cy.url().should('include','inventory')
    })
})