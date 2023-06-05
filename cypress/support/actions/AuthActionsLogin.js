/// <reference types="cypress" />

class AuthActionsLogin {
  constructor() {}
   
  acessarLogin() {
    cy.visit("http://training-wheels-qaninja.herokuapp.com/login");

    cy.get("#login").should("be.visible");
  }

  acessarSecure() {
    cy.visit("http://training-wheels-qaninja.herokuapp.com/secure");
  }

  preencherInputs(nickname, senha){
   if (nickname !== null) {
    cy.get("#nickId").type(nickname);
   }

   if (senha !== null) {
    cy.get("#passId").type(senha);
   }
  }

  submit(){
   cy.contains("div .control", "Login").click();
  }

  mensagemErro(mensagem){
   cy.get("#flash").should("contain", mensagem);
  }

  mensagemLogado(){
   cy.get(".subheader").should("contain", "Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah");
  }
}

export default new AuthActionsLogin()