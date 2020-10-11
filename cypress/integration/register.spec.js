describe("Testovi za register",()=>{
    //1
    it("Visit register page",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(".nav-link").eq(2).click()
    })

     // *** FIRST NAME ***
    //2
    it("Create user without 1st Name",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get(".nav-link").eq(2).click()
        cy.get("#last-name").type("Lakaj")
        cy.get("#email").type("testLakaj@mailinator.com")
        cy.get("#password").type("testtest1")
        cy.get("#password-confirmation").type("testtest1")
        cy.get(".form-check-input").click()
        cy.get(".btn").click()
    })
     // 10 ja
    it("Register with spaces as a 1st name",()=>{
     cy.visit("/register")
     cy.get("#first-name").type("    ")
     cy.get("#last-name").type("Lakaj")
     cy.get("#email").type("testLakaj@mailinator.com")
     cy.get("#password").type("testtest1")
     cy.get("#password-confirmation").type("testtest1")
     cy.get(".form-check-input").click()
     cy.get(".btn").click()
    })

    // 15 ja
 it("Register with 1st name with special characters",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan!#")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakaj@mailinator.com")
    cy.get("#password").type("testtest1")
    cy.get("#password-confirmation").type("testtest1")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
 })

    // 14 ja
 it("Register with two 1st names",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan Ivo")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakaj@mailinator.com")
    cy.get("#password").type("testtest1")
    cy.get("#password-confirmation").type("testtest1")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
 })


      // *** LAST NAME ***
    //3
    it("Create user without 2nd Name",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/register")
        cy.get("#first-name").type("Ivan")
        cy.get("#email").type("testLakaj@mailinator.com")
        cy.get("#password").type("testtest1")
        cy.get("#password-confirmation").type("testtest1")
        cy.get(".form-check-input").click()
        cy.get(".btn").click()
    })

    // 11 ja
   it("Register with spaces as 2nd name",()=>{
     cy.visit("/register")
     cy.get("#first-name").type("Ivan")
     cy.get("#last-name").type("    ")
     cy.get("#email").type("testLakaj@mailinator.com")
     cy.get("#password").type("testtest1")
     cy.get("#password-confirmation").type("testtest1")
     cy.get(".form-check-input").click()
     cy.get(".btn").click()
    })
 // 13 ja
    it("Register with 2 last names",()=>{
     cy.visit("/register")
     cy.get("#first-name").type("Ivan")
     cy.get("#last-name").type("Lakaj Tester")
     cy.get("#email").type("testLakaj@mailinator.com")
     cy.get("#password").type("testtest1")
     cy.get("#password-confirmation").type("testtest1")
     cy.get(".form-check-input").click()
     cy.get(".btn").click()
    })

    // 16 ja
 it("Register with 2nd name with special characters",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj$%")
    cy.get("#email").type("testLakaj@mailinator.com")
    cy.get("#password").type("testtest1")
    cy.get("#password-confirmation").type("testtest1")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
 })


// *** EMAIL ***
// 9 ja
it("Register without e mail",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj")
    //cy.get("#email").type("testLakaj@mailinator.com")
    cy.get("#password").type("testtest1")
    cy.get("#password-confirmation").type("testtest1")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})

// 17 ja
it("Register without @ in the e mail",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakajmailinator.com")
    cy.get("#password").type("testtest1")
    cy.get("#password-confirmation").type("testtest1")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})

// 18 ja
it("Register without .com in the e mail",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakaj@mailinator")
    cy.get("#password").type("testtest1")
    cy.get("#password-confirmation").type("testtest1")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})

// 12 ja
it("Register with spaces as email",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("    ")
    cy.get("#email").type("         ")
    cy.get("#password").type("testtest1")
    cy.get("#password-confirmation").type("testtest1")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})

//21 ja
it("Login with incorrect email, @?",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakaj@?mailinator.com")
    cy.get("#password").type("testtest1")
    cy.get("#password-confirmation").type("testtest1")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})

    // *** PASSWORD ***
    //4
    it("Create user without password",()=>{
        cy.visit("/register")
        cy.get("#first-name").type("Ivan")
        cy.get("#last-name").type("Lakaj")
        cy.get("#email").type("testLakaj@mailinator.com")
        cy.get("#password-confirmation").type("testtest1")
        cy.get(".form-check-input").click()
        cy.get(".btn").click()
    })

    //19 ja
it("Login with incorrect password less than 8 characters",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakaj@mailinator.com")
    cy.get("#password").type("test123")
    cy.get("#password-confirmation").type("test123")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})
//20 ja
it("Login with incorrect password, 8 characters but no numbers",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakaj@mailinator.com")
    cy.get("#password").type("testtttt")
    cy.get("#password-confirmation").type("testtttt")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})

//22 ja
it("Login with incorrect password, 8 characters but no letters",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakaj@mailinator.com")
    cy.get("#password").type("12345678")
    cy.get("#password-confirmation").type("12345678")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})



// *** CONFIRMATION PASSWORD ***
//23 ja
 it("regisration with invalid password confirmation",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakaj@mailinator.com")
    cy.get("#password").type("testtest1")
    cy.get("#password-confirmation").type("pogresnaPotvrda")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
 })

//5 ja
it("Create user without password confirm",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakaj@mailinator.com")
    cy.get("#password").type("testtest1")
    //cy.get("#password-confirmation").type("testtest1")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})
 


// *** CHECK TERMS AND CONDITIONS ***
//6 ja
 it("Create user without accepted terms and conditions",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("Ivan")
    cy.get("#last-name").type("Lakaj")
    cy.get("#email").type("testLakaj@mailinator.com")
    cy.get("#password").type("testtest1")
    cy.get("#password-confirmation").type("testtest1")
    //cy.get(".form-check-input").click()
    cy.get(".btn").click()
 })


// *** REGISTER ***
// 7 ja
it("Register without any data",()=>{
    cy.visit("/register")
    //cy.get("#first-name").type("Ivan")
    //cy.get("#last-name").type("Lakaj")
    //cy.get("#email").type("testLakaj@mailinator.com")
    //cy.get("#password").type("testtest1")
    //cy.get("#password-confirmation").type("testtest1")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})
// 8 ja
it("Register with spaces in all fields",()=>{
    cy.visit("/register")
    cy.get("#first-name").type("    ")
    cy.get("#last-name").type("     ")
    cy.get("#email").type("            ")
    cy.get("#password").type("        ")
    cy.get("#password-confirmation").type("        ")
    cy.get(".form-check-input").click()
    cy.get(".btn").click()
})

    })