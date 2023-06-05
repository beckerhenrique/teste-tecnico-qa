/// <reference types="cypress" />

import auth from "../support/actions/AuthActionsDatepicker";

const dataAtual = new Date();

//Caso o mês tenha menos que 2 dígitos, será adicionado 0 como prefixo e está sendo adicionado 1 ao mês pois os meses no objeto Date() começam no index 0
const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, "0");

const anoAtual = String(dataAtual.getFullYear());

//Caso o dia tenha um menos que 2 dígitos, será adicionado 0 como prefixo
const diaAtual = String(dataAtual.getDate()).padStart(2, "0");

const dataAtualFormatada = `${diaAtual}/${mesAtual}/${anoAtual}`;

describe("Testes datepicker com acesso a url /datepicker", () => {
  beforeEach(() => {
    auth.acessarDatepicker();
  });

  it("Verificar se o datepicker está vindo com a data atual", () => {
    auth.invocarCampoData(dataAtualFormatada)
  });

  it("Limpar datepicker e trazer data atual através de atalho", () => {
    auth.limparData()

    auth.invocarCampoData("")

    auth.escolherData(diaAtual, mesAtual, anoAtual);
  });

  it("Colocar a data do seu aniversário", () => {
    auth.escolherData("10", "06", "1997");
  });

  it("Colocar o dia atual no mês anterior", () => {
    auth.escolherData(
      diaAtual,
      String(dataAtual.getMonth()).padStart(2, "0"),
      anoAtual
    );
  });
});
