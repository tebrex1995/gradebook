/// <reference types="cypress" />

import  data  from '../fixtures/data.json'
import { login } from "../page_objects/login"
import { navigation } from "../page_objects/navigation"
import {  faker } from '@faker-js/faker'

var loginToken
var gradeBookId


describe('Gradebook via BE', () => {

    before('Login', () =>{
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/login').as('loginToken')
        cy.visit('')
        login.login()
        cy.wait('@loginToken').then(intercept => {
            loginToken = intercept.response.token
        })

    })

    beforeEach('Login token', () => {
        window.localStorage.setItem('loginToken', loginToken)
    })

    it('Add new gradebook', () => {
        cy.request({
            method: 'POST',
            url: 'https://gradebook-api.vivifyideas.com/api/gradebooks/store',
            body:{ 
            name: faker.company.catchPhrase(),
            professor_id: data.professor.id,
            },
            headers:{ 
                 authorization: `Bearer: ${loginToken}`

                  }

        }).then(response => {
            console.log(response)
            gradeBookId = response.body.id
            
        })
    })

    it('Add student', () => {

        cy.request({
            method: 'POST',
            url: 'https://gradebook-api.vivifyideas.com/api/gradebooks/students/store',
            body: {
                id: gradeBookId,
                first_name:faker.name.firstName,
                last_name:faker.name.lastName,
                imageUrl: data.img,
                gradebook_id: gradeBookId},
                headers:{ 
                    authorization: `Bearer: ${loginToken}`
   
                     }
            })
        })

        it('Delete gradebook', () => {
            cy.request({
                method: 'DELETE',
                url: `https://gradebook-api.vivifyideas.com/api/gradebooks/${gradeBookId}`,
                headers:{ 
                    authorization: `Bearer: ${loginToken}`
   
                     }
            })
        })
        
    })
