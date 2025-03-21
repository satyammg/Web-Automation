describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.flipkart.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.Pke_EE').clear('sm');
    cy.get('.Pke_EE').type('smart watch{enter}');
    // cy.get('._2iLD__').click();
    cy.get('.zDPmFV').clear('smart watch');
    cy.get('.zDPmFV').type('smart tv{enter}');
    cy.get('.MJG8Up').click();
    cy.get('.zDPmFV').clear('b');
    cy.wait(4000)
    cy.get('.zDPmFV').type('bed{enter}');
    cy.get('.MJG8Up').click();
    cy.get('.zDPmFV').click();
    /* ==== End Cypress Studio ==== */
  })
})