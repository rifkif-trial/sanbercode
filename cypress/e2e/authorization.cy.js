describe ('Scenario Login', () => {
    it('TC-001 - Login dengan username valid dan password valid', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include','inventory')
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')

    })
    it('TC-002 - Login dengan username invalid dan password invalid', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('wrong_user')
        cy.get('#password').type('wrong_pasword')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'wrong username')
    })
})