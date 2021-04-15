/// <reference types="cypress" />

context('Iframes', () => {
  beforeEach(() => {
    cy.visit('http://demo.automationtesting.in/Frames.html')
  })

  it.skip('Tentar interagir com elemento dentro do iframe (sem trocar contexto)', () => {
    // esse teste ficará com o .skip, serve apenas para entender o motivo
    // de trocarmos de contexto para interagir com os iframes
    cy.get('input[type=text]')
    .first()
    .should('be.visible')
    .type('bora agilizar')

  });

  it('Conferir se iframe foi carregado em tela após acesso', () => {

    cy.frameLoaded('#singleframe')

  })

  it('Iframes dentro de iFrames', () => {
    cy.get('a.analystic[href$=Multiple]').click()

    cy.frameLoaded('[src*=SingleFrame]')
    cy.frameLoaded('[src*=MultipleFrames]')

  });

  it('Interagir com elemento dentro do iframe (trocando contexto)', () => {

    cy.iframe('[src*=SingleFrame]')
      .find('input[type=text]')
      .should('be.visible')
      .type('bora agilizar')

  });

  it('Executar algumas ações dentro do iframe (enter)', () => {

    cy.enter('[src*=SingleFrame]').then(body => {
      body()
        .find('input[type=text]')
        .should('be.visible')
        .type('bora agilizar hehe')
    })

  });

  it('Interagir com elemento de iframe dentro de iframe', () => {

    cy.get('a.analystic[href$=Multiple]').click()

    // assim não funciona, precisa navegar na estrutura
    // cy.iframe('[src*=SingleFrame]')
    //   .find('input[type=text]')
    //   .should('be.visible')
    //   .type('bora agilizar')

    cy.iframe('[src*=MultipleFrames]').within(() => {
      cy.iframe('[src*=SingleFrame]')
        .find('input[type=text]')
        .should('be.visible')
        .type('bora agilizar')
    })

  });

})