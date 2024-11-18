Cypress.Commands.add('fillContactForm', (name, email, phone, subject, message) => {
    cy.get('input[placeholder="Name"]').type(name);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Phone"]').type(phone);
    cy.get('input[placeholder="Subject"]').type(subject);
    cy.get('[data-testid="ContactDescription"]').type(message);
});

Cypress.Commands.add('checkErrorMessages', (messages) => {
    messages.forEach(message => {  // Recorre el arreglo de mensajes y para cada elemento checkea que este
        cy.get('p').contains(message);
    });
});
