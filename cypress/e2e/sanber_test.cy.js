describe ('Verifikasi Fungsi Login',() => {
    it('TC-01 - Login dengan username valid dan password valid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','tory')
    })
        it('TC-02 - Login tanpa masukan username dan password', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="login-button"]').click()
        cy.get('.error-message-container.error').should('contain.text','sadface')
    })
})