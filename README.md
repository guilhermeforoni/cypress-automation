# 🌲 Cypress E2E Test Automation

[![Cypress](https://img.shields.io/badge/Cypress-13.x-172B4D?logo=cypress)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js->=18.x-339933?logo=node.js)](https://nodejs.org/)

Este repositório contém a suíte de testes automatizados End-to-End (E2E) desenvolvida com **Cypress**. O projeto tem como foco validar fluxos de interface Web aplicados com arquitetura limpa, alta manutenibilidade e boas práticas de automação de testes.

---

## 🎯 Destaques e Arquitetura

Neste projeto foram aplicados os seguintes conceitos e padrões do Cypress:

- **Page Object Model (POM) / Custom Commands:** Estruturação modular para mapeamento de elementos e ações das páginas, evitando duplicação de código.
- **Fixtures & Mocking:** Utilização de arquivos JSON na pasta `fixtures` para gerenciar massas de dados estáticas e dinâmicas nos cenários de teste.
- **Intercepção de Requisições (cy.intercept):** Monitoramento e validação de chamadas de API durante a navegação web para garantir a integridade da comunicação front-end/back-end.
- **Assertions Resilientes:** Uso do motor de encadeamento e re-tentativa automática nativa do Cypress (`cy.get()`, `should()`) para evitar cenários instáveis (*flakiness*).

---

## 🛠️ Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)**: Framework principal de testes E2E.
- **JavaScript (ES6+)**: Linguagem utilizada para a escrita dos testes e comandos.
- **Node.js**: Ambiente de execução JavaScript.

---

## 📂 Estrutura do Projeto

```text
├── cypress/
│   ├── e2e/            # Arquivos de testes (.cy.js)
│   ├── fixtures/       # Massas de dados e arquivos JSON para testes
│   ├── support/        # Comandos customizados (commands.js) e configurações (e2e.js)
│   └── pages/          # Classes do Page Object Model (POM)
├── cypress.config.js   # Configurações globais do Cypress (baseUrl, viewport, timeouts)
├── package.json        # Dependências e scripts de execução
└── README.md           # Documentação do projeto
