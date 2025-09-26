describe ('Scenario Login', () => {
    it('TC001 - Login Menggunakan Username Valid dan Password Valid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user').should('have.value','standard_user')
        cy.get('[name="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        // cy.get('.title').should('have.text','Products')
        cy.url().get('[data-test="title"]').should('include.text','Products')
    })
    it('TC002 - Login Menggunakan Username Invalid dan Password Invalid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('salah_user')
        cy.get('[name="password"]').type('secret_aja')
        cy.get('#login-button').click()
    })
})
