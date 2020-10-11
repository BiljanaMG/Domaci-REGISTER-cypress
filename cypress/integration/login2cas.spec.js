//0

   //let email = "test@test.com"

   // LOKATORI

   const Locators = require("../fixtures/Locators.json") // dodato za lokatore
   describe("Testovi za login",()=>{                     // izasao iz integration,usao u fixtures i poziva Lokatore
  
    // SMENE
    let correctEmail = "test@test.com"                 // kako koji upotrebis tako promeni boju ovo uz let
    let correctPassword = "test123123"
    let invalidEmailFirst = "test123123@test.com"
    let invalidEmailSecond = "test@?test.com"
    //let invalidEmailThird = "test@!test.com"  


beforeEach("visit link",()=>{                              // BEFORE each
       cy.visit("/")
       cy.url().should("contains", "https://gallery-app")
   })  



//1

    // BEFORE EACH    it("Visit Gallery App", ()=>{  
     // BEFORE EACH     cy.visit("https://gallery-app.vivifyideas.com/") 
    // BEFORE EACH   //cy.url().should("include","https://gallery-app") // asert
    // BEFORE EACH   cy.url().should("contains","https://gallery-app") //asert contains
    // BEFORE EACH    })


 //2

    it("Click on Login",()=>{
       // BEFORE EACH cy.visit("https://gallery-app.vivifyideas.com/") 
        cy.get(Locators.Header.Login).eq(1).click() // uzmi klasu nav-link, element na 1 mestu unutar klase
        cy.url().should("contains","/login") //asert contains
        cy.get(".title-style").should("have.text", "Please login") // assert have.text
        cy.get(".btn").should("be.visible") // assert be.visible
        cy.get("#email").should("be.visible") // assert be.visible
        cy.get(".title-style").should("be.visible").and("have.text", "Please login") // assert have.text and be.visible
    })

//3
    it("successfull login",()=>{
       // BEFORE EACH cy.visit("https://gallery-app.vivifyideas.com/") 
        cy.get(Locators.Header.Login).eq(1).click()
        //cy.get("#email").type(email)
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type(correctPassword)
        cy.get(Locators.Login.Submit).click()
        cy.wait(2000)
        cy.get(Locators.Header.Login).eq(3).should("be.visible") // assert be.visible za Logout dugme
    })

    //4
    it("logout",()=>{
        // BEFORE EACH cy.visit("https://gallery-app.vivifyideas.com/") 
        cy.get(Locators.Header.Login).eq(1).click()
        cy.url().should("contains","/login") // assert contains - da je user bio na login stranici
        cy.get(Locators.Login.Email).type("test@test.com")
        cy.get(Locators.Login.Password).type("test123123")
        cy.get(Locators.Login.Submit).click()
        cy.wait(500)
        cy.get(Locators.Header.Login).eq(3).should("be.visible") // assert be.visible - logout dugme jer se ulogovao
        cy.get(Locators.Header.Login).eq(3).click()
    })
    //5
    it("Login without password",()=>{
        // BEFORE EACH cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(Locators.Header.Login).eq(1).click()
        cy.get(Locators.Login.Email).type("test@test.com")
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Login.Password).then(($input)=>{
            expect($input[0].validationMessage).to.eq("Please fill out this field.")
        }) // poredimo sa validacionom porukom iz doma browsera da li je ista
        // popup iskace

    })
    //6
    it("Login with incorrect email",()=>{
        // BEFORE EACH cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(Locators.Header.Login).eq(1).click()
        cy.get(Locators.Login.Email).type(invalidEmailFirst)
        cy.get(Locators.Login.Password).type("test123123")
        cy.get(Locators.Login.Submit).click()
        cy.get(".alert").should("be.visible").and("have.text", "Bad Credentials") // assert poruke koja stoji, ne iskace kao u prethodnom 
        // ovde je poruka u kao nekom buton-u
    })
    //7
    it("Login with incorrect email type",()=>{
        // BEFORE EACH cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(Locators.Header.Login).eq(1).click()
        cy.get(Locators.Login.Email).type("test123123test.com")
        cy.get(Locators.Login.Password).type("test123123")
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Login.Email).then(($input)=>{
            expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. 'test123123test.com' is missing an '@'.") // assert u popup

    })   })
    //8
    it("Login with incorrect password less than 8 characters",()=>{
        // BEFORE EACH cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(Locators.Header.Login).eq(1).click()
        cy.get(Locators.Login.Email).type("test@test.com")
        cy.get(Locators.Login.Password).type("te") // pada jer ocekuje 8 karaktera
        cy.get(Locators.Login.Submit).click()
        cy.get(".alert").should("be.visible").and("have.text", "Bad Credentials") // assert poruke koja stoji, ne iskace kao u prethodnom 
        // ovde je poruka u kao nekom buton-u // ja dodala
    })
    //9
    it("Login with incorrect password, 8 characters but no numbers",()=>{
        // BEFORE EACH cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(Locators.Header.Login).eq(1).click()
        cy.get(Locators.Login.Email).type("test@test.com")
        cy.get(Locators.Login.Password).type("testtest") // pada jer ocekuje da jedan od 8 karaktera je broj
        cy.get(Locators.Login.Submit).click()
        cy.get(".alert").should("be.visible").and("have.text", "Bad Credentials") // assert poruke koja stoji, ne iskace kao u prethodnom 
        // ovde je poruka u kao nekom buton-u // ja dodala
    })
    //10
    // it.only -- ako smao taj jedan test zeis da se izvrsi
    it("Login with incorrect email, @?",()=>{
       // BEFORE EACH  cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(Locators.Header.Login).eq(1).click()
        cy.get(Locators.Login.Email).type(invalidEmailSecond)
        cy.get(Locators.Login.Password).type("test123123") 
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Login.Email).then(($input)=>{
            expect($input[0].validationMessage).to.eq("A part following '@' should not contain the symbol '?'.") // assert popupa
        })
    })

    afterEach("Clearovanje cache",()=>{
        cy.clearLocalStorage()
    })

})