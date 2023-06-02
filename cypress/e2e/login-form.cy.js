/// <reference types="cypress" />

const login = "papitorocks";
const senha = "pwd123";

//Função para clicar no botão de login
const clickBtn = () => {
  cy.contains("div .control", "Login").click();
};

//Função para verificar se a mensagem de erro apareceu e se ela contêm o texto passado(message)
const errorMsg = (message) => {
  cy.get("#flash").should("contain", message);
};

describe("Testes que acessam a URL de Login", () => {
  //BeforeEach utilizado para acessar o site antes de qualquer teste
  beforeEach(() => {
    cy.visit("http://training-wheels-qaninja.herokuapp.com/login");
  });

  it("Mensagem de erro ao não informar nickname", () => {
    cy.get("#passId").type(senha);

    clickBtn();

    errorMsg("Ops! Informe seu nickname.");
  });

  it("Mensagem de erro ao não informar senha", () => {
    cy.get("#nickId").type(login);

    clickBtn();

    errorMsg("Ops! Informe sua senha secreta.");
  });

  it("Login com sucesso", () => {
    cy.get("#nickId").type(login);

    cy.get("#passId").type(senha);

    // cy.intercept('GET', 'https://ka-f.fontawesome.com/releases/v5.15.4/js/free.min.js?token=0ffbc211d1').as('conta')

    clickBtn();

    // cy.wait('@conta').then((interception) => {
    //   cy.log(JSON.stringify(interception))
    // })
    
    cy.get(".title").should("contain", "Olá Papito, bem-vindo ao Orkut");
  });

  it("Mensagem de erro ao não informar senha", () => {
    cy.get("#nickId").type(login);

    clickBtn();

    errorMsg("Ops! Informe sua senha secreta.");
  });
});

describe('Teste que acessa a URL /secure', () => {
  beforeEach(() => {
    cy.visit("http://training-wheels-qaninja.herokuapp.com/secure");
  });
  
  it("Mensagem de erro ao tentar acessar URL de área logada diretamente", () => {
    errorMsg("Você deve fazer o login para ver a área logada!");
  });
});
