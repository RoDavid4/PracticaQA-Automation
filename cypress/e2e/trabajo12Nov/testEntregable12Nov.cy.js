describe('Trabajo 12 Noviembre', { testIsolation: false }, () => {

    it('Visita la Pag y verifica info hotel', () => {
        cy.visit('https://automationintesting.online/');
        cy.get('.col-sm-5').should('contain', "Shady Meadows B&B");
        cy.get('.col-sm-5').should('contain', "The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S");
        cy.get('.col-sm-5').should('contain', "012345678901");
        cy.get('.col-sm-5').should('contain', "fake@fakeemail.com");
    })

    it('Debería verificar que una de las dos imágenes está presente en la página', () => {

        // Verificar que al menos una de las dos imágenes está presente
        cy.get('body').then($body => {
            if ($body.find('img[alt="Hotel logoUrl"]').length) { // Pruebo usar img[alt=]
                cy.get('img[alt="Hotel logoUrl"]').should('be.visible');
            } else if ($body.find('img[src="/images/room2.jpg"]').length) { // Pruebo usar img[src=]
                cy.get('img[src="/images/room2.jpg"]').should('be.visible');
            } else {
                throw new Error('Ninguna de las dos imágenes está presente');
            }
        });
    });

    it('Verificar que la descripción del hotel sea la correcta', () => {
        cy.get('.col-sm-10').should('contain', "Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.");
    })

})