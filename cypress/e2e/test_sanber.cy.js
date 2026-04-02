describe('Scenario verifikasi fungsi login', () => {
    it('TC01-Login dengan username valid dan passsowrd valid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','invent')
    })
})