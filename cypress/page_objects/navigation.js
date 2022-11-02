class Navigation {

get registerButton(){
    return cy.get('a[href="/register"]')
}

clickRegisterButton(){
    this.registerButton.click()
}

get userButton(){
    return cy.get('#__BVID__34__BV_button_')

}

 get toggleButton(){
    return cy.get('.dropdown-toggle')
}

get addGradebookButton(){
    return cy.get('a[href="/gradebook/create"]')
}

clickAddGradebookButton(){
    this.addGradebookButton.click()
}


}

export const navigation = new Navigation()