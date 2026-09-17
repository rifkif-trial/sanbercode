describe ('Verifikasi Fungsi Login',() => {
    it('TC-01 - Login dengan username valid dan password valid', () => {
        cy.visit('https://www.tokopedia.com/')
        cy.get('.css-16r70d4').click()
        cy.get('#email-phone').type('trial@tokopedia.com')
        cy.get("button[id='email-phone-submit']").click()
    })
})