class loginPage{
    visitPage(){
        cy.visit('https://www.saucedemo.com')
    }
    inputUsername(username){
        cy.get('#user-name').type(username).should('have.value','standard_user')
    }
    inputPassword(password){
        cy.get('#password').type(password)
    }
     clickLoginBtn(){
        cy.get('.btn_action').should('be.visible').click()
    }
    assertionLogin(){
        cy.url().should('include','inventory')
    }
}

export default new loginPage()

