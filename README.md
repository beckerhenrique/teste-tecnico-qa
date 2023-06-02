Teste Técnico - Cypress
Este repositório contém os arquivos de teste desenvolvidos para um teste técnico de uma vaga de emprego. O teste consiste em dois cenários: teste de formulário de login e teste de date picker.

Pré-requisitos:
   Antes de executar os testes, certifique-se de ter as seguintes dependências instaladas:

   Node.js (versão 12 ou superior)

Instalação:
   Clone este repositório em sua máquina local
   Navegue até o diretório do projeto
   Instale as dependências do projeto: npm install
   Inicie o Cypress: npm open cypress

Teste de formulário de login:
   O teste de formulário de login é implementado no arquivo login-form.cy.js. Ele valida os seguintes pontos:

   Mensagem de erro ao não informar o nickname.
   Mensagem de erro ao não informar a senha.
   Login com sucesso.
   Mensagem de erro ao informar nickname ou senha incorretos.
   Mensagem de erro ao tentar acessar URL da área logada diretamente.

Teste de date picker:
   O teste de date picker é implementado no arquivo date-picker.cy.js. Ele valida os seguintes pontos:

   Verificar se o date picker está preenchido com a data atual.
   Limpar o date picker e trazer a data atual através de um atalho.
   Inserir a data do meu aniversário.
   Inserir o dia atual no mês anterior.