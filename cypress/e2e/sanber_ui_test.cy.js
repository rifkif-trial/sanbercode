describe('Verifikasi Fungsi Login', () => {
    it('TC01 - Login menggunakan username valid dan password valid', () => {
       cy.visit('https://www.saucedemo.com/')
       cy.get('[data-test="username"]').type('standard_user')
       cy.get('#password').type('secret_sauce')
       cy.get('[data-test="login-button"]').click()
       cy.url().should('include', 'inve')
    });
});