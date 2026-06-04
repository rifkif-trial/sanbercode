describe ('Verifikasi Fungsi Login', () => {
    it('Login dengan username dan password valid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', 'inventory')
    })
    it('Login dengan username tidak valid dan password valid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('invalid_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        // cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface')
        cy.get
    })
})