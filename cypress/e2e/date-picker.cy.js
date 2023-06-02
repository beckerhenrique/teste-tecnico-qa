const dataAtual = new Date();

//Caso o mês tenha menos que 2 dígitos, será adicionado 0 como prefixo e está sendo adicionado 1 ao mês pois os meses no objeto Date() começam no index 0
const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, "0");

const anoAtual = String(dataAtual.getFullYear());

//Caso o dia tenha um menos que 2 dígitos, será adicionado 0 como prefixo
const diaAtual = String(dataAtual.getDate()).padStart(2, "0");

const dataAtualFormatada = `${diaAtual}/${mesAtual}/${anoAtual}`;

//Função para escolher a data no datepicker
const escolherData = (dia, mes, ano) => {
  //Montada a variável data, separada utilizando o split, fornecendo um array "partesData"
  const data = `${dia}/${mes}/${ano}`;
  const partesData = data.split("/");

  //Subtraido 1 do valor do mês pois os meses no objeto Date() começam no index 0
  const mesIndex = parseInt(partesData[1]) - 1;

  //Criado um objeto Date levando em consideração o padrão americano
  const dataObjeto = new Date(partesData[2], mesIndex, partesData[0]);

  //Como o data-date que será utilizado está no formato padrãao de string Javascript, será necessário o mes abreviado em inglês ,para isto foi utilizado o método 'toLocaleString()' com os parametros 'en-US' e { month: "short" }
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
    .find(`div[data-date*="${mesAbreviado} ${dia}"]`)
    .click();
};

beforeEach(() => {
  cy.visit("http://training-wheels-qaninja.herokuapp.com/datepicker");
});

it("Verificar se o datepicker está vindo com a data atual", () => {
  cy.get("div #date")
    .invoke("val")
    .then((valorCampo) => {
      expect(valorCampo).to.equal(dataAtualFormatada);
    });
});

it("Limpar datepicker e trazer data atual através de atalho", () => {
  cy.get(".datetimepicker-clear-button").click();

  escolherData(diaAtual, mesAtual, anoAtual);
});

it("Colocar a data do seu aniversário", () => {
  escolherData("10", "06", "1997");
});

it("Colocar o dia atual no mês anterior", () => {
  escolherData(
    diaAtual,
    String(dataAtual.getMonth()).padStart(2, "0"),
    anoAtual
  );
});
