# Desafio Cypress Web #

Os testes foram desenvolvidos em NodeJS utilizando o framework CodeceptJS + WebdriverIO.

Para a execução dos testes é necessário:

1. Rodar o comando "npm install" para instalar as dependências.
2. Para rodar os testes existem os seguintes comandos:
   - _**npm run test**_ para executar os testes e logo após abrir o report.
   - _**npm run test:headless**_ para executar os testes sem exibir o navegador e logo após abrir o report.
   - _**npm run test:pipeline**_ para apenas executar os testes exibindo o navegador. 
   - _**npm run allure:report**_ para abrir o report a qualquer momento após os testes serem executados.
