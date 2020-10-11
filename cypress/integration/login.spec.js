//0
describe ("Testovi za login",()=>{
    let email = "test@test.com"

//1

    it("Visit Gallery App", ()=>{  
       cy.visit("https://gallery-app.vivifyideas.com/") 
    })

 //2

    it("Click on Login",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/") 
        cy.get(".nav-link").eq(1).click()
    })

//3
    it("successfull login",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/") 
        cy.get(".nav-link").eq(1).click()
        cy.get("#email").type(email)
        cy.get("#password").type("test123123")
        cy.get(".btn").click()
    })

    //4
    it("logout",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/") 
        cy.get(".nav-link").eq(1).click()
        cy.get("#email").type("test@test.com")
        cy.get("#password").type("test123123")
        cy.get(".btn").click()
        cy.wait(500)
        cy.get(".nav-link").eq(3).click()
    })
    //5
    it("Login without password",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(".nav-link").eq(1).click()
        cy.get("#email").type("test@test.com")
        cy.get(".btn").click()
    })
    //6
    it("Login with incorrect email",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(".nav-link").eq(1).click()
        cy.get("#email").type("test123123@test.com")
        cy.get("#password").type("test123123")
        cy.get(".btn").click()
    })
    //7
    it("Login with incorrect email type",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(".nav-link").eq(1).click()
        cy.get("#email").type("test123123test.com")
        cy.get("#password").type("test123123")
        cy.get(".btn").click()
    })
    //8
    it("Login with incorrect password less than 8 characters",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(".nav-link").eq(1).click()
        cy.get("#email").type("test@test.com")
        cy.get("#password").type("te") // pada jer ocekuje 8 karaktera
        cy.get(".btn").click()
    })
    //9
    it("Login with incorrect password, 8 characters but no numbers",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(".nav-link").eq(1).click()
        cy.get("#email").type("test@test.com")
        cy.get("#password").type("testtest") // pada jer ocekuje da jedan od 8 karaktera je broj
        cy.get(".btn").click()
    })
    //10
    // it.only -- ako smao taj jedan test zeis da se izvrsi
    it("Login with incorrect email, @?",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(".nav-link").eq(1).click()
        cy.get("#email").type("test@?test.com")
        cy.get("#password").type("test123123") 
        cy.get(".btn").click()
    })
})