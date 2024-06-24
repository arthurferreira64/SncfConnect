describe("Search Test", () => {
  it('should visit www.amazon.fr, click the accept button, and enter "baba" into the input field with id "twosearchtextbox", add to cart and go to cart', () => {
    cy.visit("https://www.amazon.fr/ref=nav_logo");

    // Clique sur le bouton avec l'id 'sp-cc-accept'
    if (cy.get("#sp-cc-accept")){
        cy.get("#sp-cc-accept").click();
    }

    // Sélectionne l'input avec l'id 'twosearchtextbox' et entre 'ps5'
    cy.get("#twotabsearchtextbox").type("ps5 console sony");

    cy.get("#nav-search-submit-button").click();

    cy.get("#a-autoid-3").click();
    cy.wait(500);

    cy.get("#nav-cart").click();
  });
});
