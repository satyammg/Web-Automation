describe('api test module', () => {

    it('Test first api', { tags: ['@smoke', '@regression']}, () => {
        cy.request('GET', ' https://jsonplaceholder.typicode.com/users').then((response) => {

            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response))

        })
    })

    it('Test Post Operation',{tags:['@regression']}, () => {
        const value = "Hello World"
        const body = {
            "title": value,
            "body": "This is my first test post",
            "userId": 1
        }

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: body,
            Headers:{
                'x-api-key': '',
                'authorization':'',
                'content-type' : 'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
            // cy.log(JSON.stringify(Headers))
            cy.log(JSON.stringify(response))
            expect(response.body.title).to.eq(value)
        })
    })


})