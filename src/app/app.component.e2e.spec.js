
context('Page should render', () => {

  beforeEach(() => {
    cy.visit('http://localhost:9000');
  });

  it('Title should exists', () => {
    cy.get('h2').should('contain', 'List of pets from https://petstore.swagger.io/v2 API');

    cy.get('#locale').select('fr').then(() => {
      cy.get('#h2').should('contain', 'Liste des animaux depuis l\'API https://petstore.swagger.io/v2');
    });
  });
});
