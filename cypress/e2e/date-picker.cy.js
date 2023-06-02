

const dataAtual = new Date();

//Caso o mês tenha um tamanho menor que 2, será adicionado 0 como prefixo e o mes está sendo adicionado a 1 pois os meses começam em 0
const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, "0");

const anoAtual = dataAtual.getFullYear();

//Caso o dia tenha um tamanho menor que 2, será adicionado 0 como prefixo
const diaAtual = String(dataAtual.getDate()).padStart(2, "0");

const dataAtualFormatada = `${diaAtual}/${mesAtual}/${anoAtual}`;

const escolherData = (dia, mes, ano) => {
  //É montada a variável data, separada utilizando o split, fornecendo um array "partesData"
  const data = `${dia}/${mes}/${ano}`;
  const partesData = data.split("/");

  //É subtraido 1 do valor do mês pois os meses no objeto Date() começam em 0
  const mesIndex = parseInt(partesData[1]) - 1;

  //É criado um objeto Date levando em consideração o padrão americano
  const dataObjeto = new Date(partesData[2], mesIndex, partesData[0]);

  //É utilizado o metódo 'toLocaleString()' com os parametros 'en-US' para deficinir o idioma inglês e month: "short" para adquirir o mês abreviado
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
