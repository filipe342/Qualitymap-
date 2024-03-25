# Projeto de Teste API com Cypress

## Sobre o Projeto

Este projeto implementa testes de API utilizando Cypress e autenticação para interagir com a API do ServeRest. Inclui operações de CRUD para produtos.

## Pré-Requisitos

- Node.js (última versão LTS recomendada)
- npm (incluso com Node.js)
- Cypress

## Configuração

Para configurar o projeto:

1. Clone o repositório.
2. Navegue até a pasta do projeto e execute `npm install` para instalar as dependências, incluindo Cypress.

## Estrutura do Projeto

- `cypress/integration`: Contém os arquivos de teste.
- `cypress/support`: Contém arquivos de utilidades e comandos personalizados do Cypress.
- `cypress.json`: Configurações do Cypress.

## Testes Implementados

- **Login**: Autenticação e obtenção de token.
- **Criação de Produto**: Adiciona um novo produto.
- **Leitura de Produtos**: Lista os produtos existentes.
- **Atualização de Produto**: Modifica um produto específico.
- **Exclusão de Produto**: Remove um produto.

## Execução dos Testes

Use o comando `npx cypress open` para abrir a interface do Cypress e executar os testes.

## Recursos

- `generateRandomProduct()`: Função para gerar dados de produto aleatórios.
- `cy.api()`: Comando Cypress que estende `cy.request()` com funcionalidades adicionais.


