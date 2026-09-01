# SauceDemo - Casos de Teste de Login

## Aplicação

SauceDemo

## Funcionalidade

Login

## Ambiente de Teste

* Navegador: Google Chrome
* Ferramenta de Automação: Cypress
* Tipo de Teste: End-to-End (E2E)

---

## TC-001 - Login com credenciais válidas

**Tipo:** Positivo

**Prioridade:** Alta

### Pré-condições

* O usuário está na página de login do SauceDemo.
* Um usuário e uma senha válidos estão disponíveis.

### Dados de Teste

* Usuário: `standard_user`
* Senha: `secret_sauce`

### Passos

1. Acessar a página de login do SauceDemo.
2. Informar um usuário válido.
3. Informar uma senha válida.
4. Clicar no botão Login.

### Resultado Esperado

O usuário deve realizar o login com sucesso e ser direcionado para a página de produtos.

### Validações

* A URL deve conter `/inventory.html`.
* O título "Products" deve estar visível na página.

### Status

PASS

---

## TC-002 - Login com senha inválida

**Tipo:** Negativo

**Prioridade:** Alta

### Pré-condições

* O usuário está na página de login do SauceDemo.
* Um usuário válido está disponível.

### Dados de Teste

* Usuário: `standard_user`
* Senha: `invalid_password`

### Passos

1. Acessar a página de login do SauceDemo.
2. Informar um usuário válido.
3. Informar uma senha inválida.
4. Clicar no botão Login.

### Resultado Esperado

O login não deve ser realizado e uma mensagem de erro deve ser apresentada ao usuário.

### Validações

* A mensagem de erro deve estar visível.
* A mensagem deve informar que o usuário e a senha não são válidos.

### Status

PASS
