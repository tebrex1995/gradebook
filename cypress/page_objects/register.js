import data from '../fixtures/data.json'
import { faker } from '@faker-js/faker';


class Register {

get firstNameInput(){
    return cy.get('#first_name')
}

get lastNameInput(){
    return cy.get('#last_name')
 }

 get emailInput(){
    return cy.get('#email')
 }

 get passwordInput(){
    return cy.get('#password')
 }

 get confirmPasswordInput(){
    return cy.get('#password_confirmation')
 }

get checkbox(){
    return cy.get('.custom-control-label')
 
}

get registerButtonSubmit(){
    return cy.get('button[type="submit"]')
}

register(){
    this.firstNameInput.type(faker.name.firstName())
    this.lastNameInput.type(faker.name.lastName())
    this.emailInput.type(faker.internet.email())
    this.passwordInput.type(data.validCredentials.password)
    this.confirmPasswordInput.type(data.validCredentials.password)
    this.checkbox.click()
    this.registerButtonSubmit.click()
}

 
}

export const register = new Register()