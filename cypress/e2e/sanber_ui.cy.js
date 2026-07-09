// describe ('Scenario Verifikasi Fungsi Login', () => {
//     it('TC01-Login dengan username valid dan password valid', () => {
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('[data-test="username"]').type('standard_user')
//         cy.get('[data-test="password"]').type('secret_sauce')
//         cy.get('[data-test="login-button"]').click()
//         cy.url().should('include','tory')  
//     })
// })
describe ('Coba login tokped', () => {
    it('TC01-Login dengan cara biasa', () => {
        cy.visit('https://www.tokopedia.com/')
        cy.get('.css-16r70d4').click()
        cy.get('#email-phone').type('081444444444444')
        cy.get("button[id='email-phone-submit'] span").click()
        cy.get('.css-18c7wza-unf-btn.eg8apji0').click()  
    })
})