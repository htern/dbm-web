//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// Please read our "Introduction to Cypress"
// https://on.cypress.io/introduction-to-cypress

describe("Example stories", () => {
  before(() => {
    cy.visitStory({
      kind: "Button",
      story: "with text"
    });
  });

  it("should have a sample button", () => {
    cy.getInStoryByTestId("hello-button").should("contain", "Hello Button");
  });
});
