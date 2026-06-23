# Projeto de Automação Web com Cypress

## Descrição

Projeto de automação de testes para a aplicação Serverest utilizando Cypress e JavaScript.

O objetivo deste projeto é demonstrar boas práticas de automação de testes, incluindo a utilização do padrão de projeto Page Object Model (POM), integração contínua com GitHub Actions, geração de relatórios automatizados e validação de qualidade de código com ESLint.

---

## Tecnologias Utilizadas

* JavaScript
* Cypress
* ESLint
* Mochawesome
* GitHub Actions

---

## Estrutura do Projeto

```text
cypress/
├── e2e/
│   └── login.cy.js
├── pages/
│   └── LoginPage.js
├── support/
│   ├── commands.js
│   └── e2e.js

.github/
└── workflows/
    └── cypress.yml
    
.gitignore
cypress.config.js
eslint.config.mjs
package-lock.json
package.json
README.md
```

---

## Padrões Aplicados

* Page Object Model (POM)
* Separação entre testes e elementos da página
* Assertions claras e objetivas
* Organização por responsabilidade
* Integração contínua com GitHub Actions

---

## Cenários Automatizados

### Login com sucesso

Valida que o usuário consegue acessar o sistema utilizando credenciais válidas.

### Login com usuário inválido

Valida a exibição da mensagem de erro ao informar credenciais inválidas.

### Login com campos obrigatórios em branco

Valida a exibição das mensagens de obrigatoriedade dos campos de e-mail e senha.

---

## Como Executar o Projeto

### Instalar dependências

```bash
npm install
```

### Executar testes em modo interativo

```bash
npx cypress open
```

### Executar testes em modo headless

```bash
npx cypress run
```

---

## Executar Validação de Código

```bash
npx eslint .
```

---

## Relatórios

Os relatórios são gerados utilizando Mochawesome.

Após a execução dos testes:

```bash
npx cypress run
```

Os arquivos serão gerados em:

```text
cypress/reports/
```

---

## Integração Contínua

O projeto possui integração contínua configurada com GitHub Actions.

A pipeline executa automaticamente:

* Instalação das dependências
* Validação de código com ESLint
* Execução dos testes Cypress
* Geração dos artefatos de execução

---

## Autor

Rômulo Moraes
