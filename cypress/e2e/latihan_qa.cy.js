describe ('Verifikasi Fungsi Login', ()=>{
    it('TC-001-Login dengan Username Valid dan Password Valid', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user').should('have.value','standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.url().should('include','inventory')
    })
})