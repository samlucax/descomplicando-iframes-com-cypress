# Descomplicando iFrames com Cypress

Aplicação de exemplo: http://demo.automationtesting.in/Frames.html
Vídeo: https://youtu.be/LQCcwl6kuRU

# Projeto

Neste pequeno projeto, você aprenderá a:

- Tentar interagir com elemento dentro do iframe (sem trocar contexto) 
- Conferir se iframe foi carregado em tela após acesso
- Iframes dentro de iFrames
- Interagir com elemento dentro do iframe (trocando contexto)
- Executar algumas ações dentro do iframe (enter)
- Interagir com elemento de iframe dentro de iframe


Veja os exemplos deste projeto em: cypress/integration/iframes.spec.js

# Instalação

```sh
npm install -D cypress
npm install -D cypress-iframe
```

# Materiais complementares

- Documentação Cypress iFrame - https://www.npmjs.com/package/cypress-iframe
- Working with iframes in Cypress - Gleb Bahmutov - https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
- Testing Iframes with Cypress - https://www.mariedrake.com/post/testing-iframes-with-cypress
- Cypress .within - https://docs.cypress.io/api/commands/within


# Bugs conhecidos

- Test Runner não exibe o conteúdo do iframe no *Time Travel*
- Issues abertas no repositório do plugin - https://gitlab.com/kgroat/cypress-iframe/-/issues


---

*Importante* : o suporte nativo a iframes está no ROADMAP priorizado do Cypress.

Veja em: https://docs.cypress.io/guides/references/roadmap#Upcoming-features

Se você gostou deste conteúdo, deixe seu ⭐️
