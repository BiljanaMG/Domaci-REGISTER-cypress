
  
      //        *** LOKATORI ***

    const Locators = require("../fixtures/DOM-Locators.json") 
    describe("Testovi za register",()=>{
     
        // SMENE
        let FirstName = "Biljana"
        let FirstNameWithCharacters = "Biljana@!"
        let TwoFirstNames = "Biljana Ana"
        let LastName = "Mijatovic"
        let twoLastNames = "Mijatovic Galas"
        let LastNameWithCharacters = "Mijatovic@!Galas"
        let correctEmail = "" 
        let EmailWithoutAT = "test.com"
        let EmailWithoutDOTcom = "testLakaj@mailinator"
        let incorrectEmail = "testLakaj@?mailinator.com"
        let correctPassword = "testtest1"
        let correctPasswordConfirmation = "testtest1"
        let smallPassword = "test123"
        let smallPasswordConfirmation = "test123"
        let noNumberPassword = "testtttt"
        let noNumberPasswordConfirmation = "testtttt"
        let onlyNumberPassword = "12345678"
        let onlyNumberPasswordConfirmation = "12345678"

function uniqueEmail() {                                       // funkcija za jedinstven mejl
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + "@gmail.com";
  }

    beforeEach("visit link",()=>{                              // BEFORE each
        correctEmail = uniqueEmail();
        cy.visit("/register")
        cy.url().should("contains", "https://gallery-app")
    })  

     // *** FIRST NAME ***
    //1
    it("Create user without 1st Name",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(Locators.Header.Login).eq(2).click()
        cy.get(Locators.Register.LastName).type(LastName)
        cy.get(Locators.Register.Email).type(correctEmail)
        cy.get(Locators.Register.Password).type(correctPassword)
        cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
        cy.get(Locators.Register.FormCheckInput).click()
        cy.get(Locators.Register.Submit).click()

       cy.get(Locators.Register.FirstName).then(($input)=>{                             // assert za poruku koja iskoci
       expect($input[0].validationMessage).to.eq("Please fill out this field.")
        }) 

    })

     // 2
    it("Register with spaces as a 1st name",()=>{
     cy.get(Locators.Register.FirstName).type("    ")
     cy.get(Locators.Register.LastName).type(LastName)
     cy.get(Locators.Register.Email).type(correctEmail)
     cy.get(Locators.Register.Password).type(correctPassword)
     cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
     cy.get(Locators.Register.FormCheckInput).click()
     cy.get(Locators.Register.Submit).click()

     cy.get(".alert").should("be.visible").and("have.text", "The first name field is required.") // assert za poruku
    })

    // 3
 it("Register with 1st name with special characters",()=>{
    cy.get(Locators.Register.FirstName).type(FirstNameWithCharacters)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(correctEmail)
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.wait(2000)
    cy.get(Locators.Header.Login).eq(3).should("be.visible") // assert be.visible za Logout dugme
 })

    // 4
 it("Register with two 1st names",()=>{
    cy.get(Locators.Register.FirstName).type(TwoFirstNames)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(correctEmail)
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.wait(2000)
    cy.get(Locators.Header.Login).eq(3).should("be.visible") // assert be.visible za Logout dugme
 })

      // *** LAST NAME ***
    //5
    it("Create user without 2nd Name",()=>{
        cy.get(Locators.Register.FirstName).type(FirstName)
        cy.get(Locators.Register.Email).type(correctEmail)
        cy.get(Locators.Register.Password).type(correctPassword)
        cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
        cy.get(Locators.Register.FormCheckInput).click()
        cy.get(Locators.Register.Submit).click()
        cy.get(Locators.Register.LastName).then(($input)=>{                             // assert za poruku koja iskoci
            expect($input[0].validationMessage).to.eq("Please fill out this field.")
             }) 
    })
    // 6 
   it("Register with spaces as 2nd name",()=>{
     cy.get(Locators.Register.FirstName).type(FirstName)
     cy.get(Locators.Register.LastName).type("    ")
     cy.get(Locators.Register.Email).type(correctEmail)
     cy.get(Locators.Register.Password).type(correctPassword)
     cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
     cy.get(Locators.Register.FormCheckInput).click()
     cy.get(Locators.Register.Submit).click()
     cy.get(".alert").should("be.visible").and("have.text", "The last name field is required.") // assert za poruku
    })
 // 7
    it("Register with 2 last names",()=>{
     cy.get(Locators.Register.FirstName).type(FirstName)
     cy.get(Locators.Register.LastName).type(twoLastNames)
     cy.get(Locators.Register.Email).type(correctEmail)
     cy.get(Locators.Register.Password).type(correctPassword)
     cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
     cy.get(Locators.Register.FormCheckInput).click()
     cy.get(Locators.Register.Submit).click()
     cy.wait(2000)
     cy.get(Locators.Header.Login).eq(3).should("be.visible") // assert be.visible za Logout dugme

    })

    // 8
 it("Register with 2nd name with special characters",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastNameWithCharacters)
    cy.get(Locators.Register.Email).type(correctEmail)
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.wait(2000)
    cy.get(Locators.Header.Login).eq(3).should("be.visible") // assert be.visible za Logout dugme
 })


// *** EMAIL ***
// 9 
it("Register without an email",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.get(Locators.Register.Email).then(($input)=>{                             // assert za poruku koja iskoci
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
         }) 
})

// 10
it("Register without @ in the e mail",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(EmailWithoutAT)
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.get(Locators.Register.Email).then(($input)=>{
        expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. 'test.com' is missing an '@'.") // assert u pop-up

    }) 
})

// 11
it("Register without .com in the e mail",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(EmailWithoutDOTcom)
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.get(".alert").should("be.visible").and("have.text", "The email must be a valid email address.") // assert za poruku
})

// 12 
it("Register with spaces as an email",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type("         ")
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.get(Locators.Register.Email).then(($input)=>{                             // assert za poruku koja iskoci
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
         }) 
})

//13
it("Login with incorrect email, @?",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(incorrectEmail)
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.get(Locators.Register.Email).then(($input)=>{
        expect($input[0].validationMessage).to.eq("A part following '@' should not contain the symbol '?'.") // assert popup-a
    })
})

    // *** PASSWORD ***
    //14
    it("Create user without password",()=>{
        cy.get(Locators.Register.FirstName).type(FirstName)
        cy.get(Locators.Register.LastName).type(LastName)
        cy.get(Locators.Register.Email).type(correctEmail)
        cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
        cy.get(Locators.Register.FormCheckInput).click()
        cy.get(Locators.Register.Submit).click()
        cy.get(Locators.Register.Password).then(($input)=>{                             // assert za poruku koja iskoci
            expect($input[0].validationMessage).to.eq("Please fill out this field.")
             })
    })

    //15
it("Login with incorrect password less than 8 characters",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(correctEmail)
    cy.get(Locators.Register.Password).type(smallPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(smallPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.get(".alert").should("be.visible").and("have.text", "The password must be at least 8 characters.") // assert poruke
})
//16
it("Login with incorrect password, 8 characters but no numbers",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(correctEmail)
    cy.get(Locators.Register.Password).type(noNumberPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(noNumberPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.get(".alert").should("be.visible").and("have.text", "The password format is invalid.") // assert poruke
})

//17
it("Login with incorrect password, 8 characters but no letters",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(correctEmail)
    cy.get(Locators.Register.Password).type(onlyNumberPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(onlyNumberPasswordConfirmation)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.wait(2000)
    cy.get(Locators.Header.Login).eq(3).should("be.visible") // assert be.visible za Logout dugme
})

// *** CONFIRMATION PASSWORD ***
//18
 it("Registration with invalid password confirmation",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(correctEmail)
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).type("pogresna potvrda")
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.get(".alert").should("be.visible").and("have.text", "The password confirmation does not match.") // assert za poruku
    
 })

//19
it("Create user without password confirm",()=>{
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(correctEmail)
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.get(Locators.Register.PasswordConfirmation).then(($input)=>{                             // assert za poruku koja iskoci
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
         })
})

// *** CHECK TERMS AND CONDITIONS ***
//20
 it("Create user without accepted terms and conditions",()=>{
    //cy.visit("/register")
    cy.get(Locators.Register.FirstName).type(FirstName)
    cy.get(Locators.Register.LastName).type(LastName)
    cy.get(Locators.Register.Email).type(correctEmail)
    cy.get(Locators.Register.Password).type(correctPassword)
    cy.get(Locators.Register.PasswordConfirmation).type(correctPasswordConfirmation)
    cy.get(Locators.Register.Submit).click()
    cy.get(".alert").should("be.visible").and("have.text", "The terms and conditions must be accepted.") // assert za poruku
 })


// *** REGISTER ***
// 21
it("Register without any data",()=>{
    cy.get(Locators.Register.FormCheckInput).click()
    cy.get(Locators.Register.Submit).click()
    cy.get(Locators.Register.FirstName).then(($input)=>{                             // assert za poruku koja iskoci
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
         })
})
// 22 
it("Register with spaces in all fields",()=>{
    cy.get(Locators.Register.FirstName).type("    ")
     cy.get(Locators.Register.LastName).type("    ")
     cy.get(Locators.Register.Email).type("    ")
     cy.get(Locators.Register.Password).type("    ")
     cy.get(Locators.Register.PasswordConfirmation).type("    ")
     cy.get(Locators.Register.FormCheckInput).click()
     cy.get(Locators.Register.Submit).click()
     cy.get(Locators.Register.Email).then(($input)=>{                             // assert za poruku koja iskoci
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
         })
    })
 
    afterEach("Brisanje kes memorije",()=>{               // AFTER EACH
    cy.clearLocalStorage()
})

    })
