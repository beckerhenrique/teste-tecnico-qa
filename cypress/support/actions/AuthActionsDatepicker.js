/// <reference types="cypress" />

class AuthActionsDatepicker {
  constructor() {}

  acessarDatepicker(){
   cy.visit("http://training-wheels-qaninja.herokuapp.com/datepicker")

   cy.get(".box .title").should("be.visible")
  }

  invocarCampoData(data){
   cy.get("div #date")
      .invoke("val")
      .then((valorCampo) => {
        expect(valorCampo).to.equal(data);
      });
  }

  limparData(){
   cy.get(".datetimepicker-clear-button").click();
  }

  escolherData(dia, mes, ano){
   //Montada a variável data, separada utilizando o split, fornecendo um array "partesData"
  const data = `${dia}/${mes}/${ano}`;
  const partesData = data.split("/");

  //Subtraido 1 do valor do mês pois os meses no objeto Date() começam no index 0
  const mesIndex = parseInt(partesData[1]) - 1;

  //Criado um objeto Date levando em consideração o padrão americano
  const dataObjeto = new Date(partesData[2], mesIndex, partesData[0]);

  //Como o data-date que será utilizado está no formato padrão de string Javascript, será necessário o mês abreviado em inglês, para isto foi utilizado o método 'toLocaleString()' com os parametros 'en-US' e { month: "short" }
  const mesAbreviado = dataObjeto.toLocaleString("en-US", { month: "short" });

  cy.get(".datetimepicker-dummy-wrapper").click();

  cy.get(".datepicker-nav-month").click();

  cy.get(".datepicker-months")
    .find(`div[data-month="${mes}"]`)
    .click();

  cy.get(".datepicker-nav-year").click();

  cy.get(".datepicker-years")
    .find(`div[data-year="${ano}"]`)
    .click();

  cy.get(".datepicker-days")
    .find(`div[data-date*="${mesAbreviado} ${dia} ${ano}"]`)
    .click();

    cy.get("div #date")
      .invoke("val")
      .then((valorCampo) => {
        expect(valorCampo).to.equal(data);
      });
  }
}

export default new AuthActionsDatepicker()