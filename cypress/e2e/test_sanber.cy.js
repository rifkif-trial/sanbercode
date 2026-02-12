describe ('Verifikasi fungsi Login', () => {
    it('TC-01-Login dengan username dan password yang valid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', 'inventory.html')
    })
})