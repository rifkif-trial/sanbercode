describe ('Scenario Verifikasi Fungsi Login', () => {
    it('TC001-Login dengan username valid & password valid', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard').should('have.value','standard_user')
        cy.get('#password').type('secret_sauce')
        // cy.screenshot('manual-screenshot')
        cy.get('.btn_action').should('be.visible')
        cy.get('.btn_action').click()
        cy.url().should('include','inventory')
    })
})