
import data from '../fixtures/data.json'

class Login {

    get emailInput(){
        return cy.get('#email')
    }

    get passwordInput(){
        return cy.get('#userPassword')
    }

    get loginButton(){
        return cy.get('button[type="submit"]')
    }

    login(){
        this.emailInput.type(data.validCredentials.email)
        this.passwordInput.type(data.validCredentials.password)
        this.loginButton.click()
    }
}


export const login = new Login()