describe ('Verifikasi fungsi login', () => {
    it('TC001-Login dengan email dan password valid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inven')
    })
    it('TC002-Login dengan email dan password invalid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        // cy.url().should('include', 'https://www.saucedemo.com/')
    })
})