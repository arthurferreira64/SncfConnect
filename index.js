describe("Search Test", () => {
  it('should visit localhost:3000 and enter "baba" into the input field with id "twosearchtextbox"', () => {
    cy.visit("https://www.amazon.fr/ref=nav_logo");

    // Sélectionne l'input avec l'id 'twosearchtextbox' et entre 'baba'
    cy.get("#twosearchtextbox").type("baba");
  });
});
