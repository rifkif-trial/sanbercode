describe ('API Testing Data Access', () => {
    it('List Users', ()=> {
        cy.request('Get', 'https://reqres.in/api/users?page=2')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('data')
                
            })
    })
    it('Single User', ()=> {
        cy.request('Get', 'https://reqres.in/api/users/2')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data).to.have.property('email')
                cy.log(JSON.stringify(response.body)); 
            })
           
    })
    it('Create user', ()=> {
        cy.request({
            method:'Post', 
            url:'https://reqres.in/api/users',
            body: {
                     "name": "andi",
                      "job": "tester"
            },
            headers: {
            'x-api-key':'reqres-free-v1'
            }
    })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name','andi')
        })
    })
})
