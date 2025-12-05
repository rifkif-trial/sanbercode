describe('API Testing', () => {
  it('GET Single User By ID API Testing', () => {
    cy.request('GET', 'https://reqres.in/api/users/2')
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.to.be.null;
      cy.log(JSON.stringify(response.body));
    });
  });
});
 