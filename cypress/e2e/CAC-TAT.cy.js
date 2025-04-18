describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
    cy.visit('../src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})

describe('Preenche os campos obrigatórios e envia o formulário', () => {
  it('Aplica um nome, email e como podemos te ajudar ', () => {

    cy.visit('../src/index.html');

    cy.get('input[name="firstName"]')
    .type('Helena')
    .should('have.value', 'Helena')

    cy.get('input[name="lastName"]')
    .type('Gomes')
    .should('have.value', 'Gomes')

    cy.get('input[id="email"]')
    .type('helena.gomes103200@gmail.com')
    .should('have.value', 'helena.gomes103200@gmail.com')


    cy.get('textarea[id="open-text-area"]')
    .type('Olá o atendimento foi ótimo!')
    .should('have.value', 'Olá o atendimento foi ótimo!')

    cy.get('button[type="submit"]')
    .click
  })
})

