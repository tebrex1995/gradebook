/// <reference types="cypress" />

import { navigation } from '../page_objects/navigation'
import { login } from '../page_objects/login'

describe('login test case', () => {
    
    before('visit home url', () => {
        cy.visit('')
    })

it('login with valid credentials', () => { 
    
    login.login()
    cy.wait(1000)
    cy.url().should('contain', '/gradebooks')
    navigation.toggleButton.should('be.visible')
   
})

})