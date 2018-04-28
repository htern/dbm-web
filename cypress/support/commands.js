// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// **************************

// Taken from https://github.com/paypal/downshift/blob/18b91795101930747819fa7274f0855183671bf9/cypress/support/commands.js

// because storybook loads our story in an iframe,
// we have to get that iframe and select items inside there.
// Learned this from https://medium.com/@mtiller/testing-react-components-using-storybook-and-cypress-1689a27f55aa
const getInStory = selector => {
  cy.get("#storybook-preview-iframe").then($iframe => {
    const doc = $iframe.contents();
    return cy.wrap(doc.find(selector));
  });
};

// see the baseUrl config in cypress.json
Cypress.Commands.add("visitStory", ({ kind, story }) => {
  return cy.visit(`/?selectedKind=${kind}&selectedStory=${story}&full=1`);
});

Cypress.Commands.add("getInStory", getInStory);

Cypress.Commands.add("getInStoryByTestId", id =>
  getInStory(`[data-test="${id}"]`)
);
