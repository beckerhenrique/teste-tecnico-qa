/// <reference types="cypress" />

import auth from "../support/actions/AuthActionsLogin";

const login = "papitorocks";
const senha = "pwd123";
const senhaIncorreta = "11111"


describe("Testes que acessam a URL de Login", () => {
  //BeforeEach utilizado para acessar o site antes de qualquer teste
  beforeEach(() => {
    auth.acessarLogin()
  });

  it("Mensagem de erro ao não informar nickname", () => {
    auth.preencherInputs(null , senha)

    auth.submit()

    auth.mensagemErro("Ops! Informe seu nickname.")
  });

  it("Mensagem de erro ao não informar senha", () => {
    auth.preencherInputs(login, null)

    auth.submit()

    auth.mensagemErro("Ops! Informe sua senha secreta.")
  });

  it("Login com sucesso", () => {
    auth.preencherInputs(login, senha)

    auth.submit()
    
    auth.mensagemLogado()
  });

  it("Mensagem de erro ao informar nickname ou senha incorretos", () => {
    auth.preencherInputs(login, senhaIncorreta);

    auth.submit()

    auth.mensagemErro("Oops! nickname e/ou senha incorretos :(");
  });
});

describe('Teste que acessa a URL /secure', () => {
  beforeEach(() => {
    auth.acessarSecure();
  });
  
  it("Mensagem de erro ao tentar acessar URL de área logada diretamente", () => {
    auth.mensagemErro("Você deve fazer o login para ver a área logada!");
  });
});
