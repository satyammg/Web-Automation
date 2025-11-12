describe('Test new window link', () => {
    it('Test privacy link',{tags:['@regression']}, () => {
        cy.visit('https://staging-skyportcare.daikincomfort.com/')
        cy.wait(4000)
        cy.contains('Privacy Policy').invoke('removeAttr', 'target').click(); // work with new url open
        cy.wait(4000)
        cy.url().should('include', 'https://daikincomfort.com/privacy-notice')
        cy.go('back') // cy.go(-1) back // cy.go(+1) forward
        cy.url().should('include', 'https://staging-skyportcare.daikincomfort.com/')
    })
})