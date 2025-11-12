import login from "../pages/login.page"

describe('Test Module', ()=>{

    const loginPage = new login() 
    it('First Testcase', {tags:['@smoke', '@regression']},()=>{

        loginPage.navigateToUrl()

        cy.title().then((title)=>{
            cy.log("Title is",title);
            expect(title).to.eq('Google')
        })
        
        cy.fixture('user').then((userdata)=>{
            cy.get('.gLFyf').type(`${userdata.name}{enter}`)
        })

        cy.get('gLFyf').invoke('vale').then((value)=>{
            expect(value).to.eq(userdata.name)
        })
    })
})