describe ("Verifikasi fungsi login",() =>{
    it("TC01 - Login dengan username dan password valid", () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.url().should("include", "tory")
    })
    it("TC02 - Login dengan username dan password invalid", () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("salah_user")
        cy.get("#password").type("salah password")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('include.text', 'Epic sadface')
    })
})
