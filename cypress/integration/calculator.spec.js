
describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to add two number buttions', () => {
    const num1 = cy.get('#number1').click();
    cy.get('#operator_add').click();
    const num2 = cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')

  })

  it('should be able to subtract two numbers', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should be able to multiply two numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('should be able to divide two numbers', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('concatenate multiple number button clicks', () => {
    cy.get('#number5').click();
    cy.get('#number7').click();
    cy.get('#operator_add').click()
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '58')

  })

  it('chain multiple operations together', () => {
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')

  })

  it('clear the running total without affecting the calculation', () => {
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#clear').click();

    cy.get('#operator-equals').click();
    
    cy.get('.display').should('contain', '9')

  })

  it('Divide by Zero', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
 
    
    cy.get('.display').should('contain', 'Infinity')

  })



})