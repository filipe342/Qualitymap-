# Desafio QualityMap

Este projeto, denominado "Desafio QualityMap", é um exemplo que utiliza Playwright e Cucumber para executar testes BDD em um site de comércio eletrônico.

## Como executar localmente

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Instale as dependências usando `npm install`.
4. Execute os testes com o comando `npm test`.

## Características

- Utiliza Playwright para automação de navegador.
- Implementa testes BDD usando Cucumber.
- Inclui exemplos de testes para o registro no site nopCommerce.

## Testes

Os testes estão definidos em Gherkin no arquivo `features/homepage.feature` e as implementações dos testes estão em `features/support/steps.js`.

## Configuração

- Playwright configurado no arquivo `playwright.config.ts`.
- TypeScript usado com configurações em `tsconfig.json`.

## Dependências

Principais dependências incluem Playwright, Cucumber e Faker para geração de dados aleatórios.
