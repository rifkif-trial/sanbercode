class loginPage {
    visit() {
        cy.visit('https://www.saucedemo.com')
    }
    inputUsername(username){
       cy.get('#user-name').type(username) 
    }
    inputPassword(password){
        cy.get('#password').type(password)
    }
    clickLogin(){
       cy.get('.btn_action').click() 
    }
    assertLogin(){
        cy.url().should('include','inventory')
    }
}

export default new loginPage()