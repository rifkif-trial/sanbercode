describe ('Verifikasi fungsi login', () =>{
    it('TC001-Login dengan username valid dan password valid',() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[name="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', 'tory')
    })
})