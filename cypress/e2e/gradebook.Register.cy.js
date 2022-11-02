/// <reference types="cypress" />
import { navigation } from '../page_objects/navigation'
import {register} from '../page_objects/register'

describe('Visit gradebook page', () => {

    before('Visit home page', () => {
        cy.visit('')
    })

    it('Check if we are on the login page', () => {
        cy.url().should('contain', '/login')
    })

    it('Click on register page button', () => { 
        navigation.clickRegisterButton()
        cy.url().should('contain', '/register')
    })

    it('Register new account', () => {
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/register').as('registerUser')
        navigation.clickRegisterButton()
        register.register()
        cy.url().should('contain','/gradebooks')
        navigation.userButton.should('be.visible')
        cy.wait('@registerUser').then(intercept => {
            console.log(intercept)
            expect(intercept.response.statusCode).to.eq(201)
        })
        
        })




})





