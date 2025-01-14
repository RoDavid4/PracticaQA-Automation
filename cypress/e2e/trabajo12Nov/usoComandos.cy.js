describe('Enviar mensaje', { testIsolation: false }, () => {

    // Se genera un arreglo que contiene todos los errores que buscamos
    const errorMessages = [
        'Subject must be between 5 and 100 characters.',
        'Subject may not be blank',
        'Name may not be blank',
        'Message must be between 20 and 2000 characters.',
        'Message may not be blank',
        'Email may not be blank',
        'Phone may not be blank',
        'Phone must be between 11 and 21 characters.'
    ];

    /* it('Validar envío de form vacío', () => {
        cy.visit('https://automationintesting.online/')
        cy.log('Envío de form de contacto en blanco...')
        cy.get('#submitContact').click()
        cy.get('.alert').should('be.visible')
        cy.get('p').contains('Subject must be between 5 and 100 characters.')
        cy.get('p').contains('Subject may not be blank')
        cy.get('p').contains('Name may not be blank')
        cy.get('p').contains('Message must be between 20 and 2000 characters.')
        cy.get('p').contains('Message may not be blank')
        cy.get('p').contains('Email may not be blank')
        cy.get('p').contains('Phone may not be blank')
        cy.get('p').contains('Phone must be between 11 and 21 characters.')
    }) */

    it('Validar envío de form vacío', () => {
        cy.visit('https://automationintesting.online/'); // Visito solo una vez porque esta configurado
        cy.log('Envío de form de contacto en blanco...'); // el testIsolation como false.
        cy.get('#submitContact').click();
        cy.get('.alert').should('be.visible'); // Debe de haber una alerta visible
        cy.checkErrorMessages(errorMessages); // Debe de contener los errores que estan en el arreglo
    })

    /* it('Validar envío de form con data incorrecta', () => {
        cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type('asd')
        cy.get('input[placeholder="Email"]').type('asdasd')
        cy.get('input[placeholder="Phone"]').type('asdasd')
        cy.get('input[placeholder="Subject"]').type('asdasd')
        cy.get('[data-testid="ContactDescription"]').type('asdasd')
        cy.get('#submitContact').click()

        cy.get('.alert').should('be.visible')
        cy.get('p').contains('Phone must be between 11 and 21 characters.')
        cy.get('p').contains('debe ser una dirección de correo electrónico con formato correcto')
        cy.get('p').contains('Message must be between 20 and 2000 characters.')
    }) */

    it('Validar envío de form con data incorrecta', () => {
        cy.log('Set de datos incorrectos...');
        cy.fillContactForm('asd', 'asdasd', 'asdasd', 'asdasd', 'asdasd');
        cy.get('#submitContact').click();
        cy.get('.alert').should('be.visible');
        cy.checkErrorMessages([
            'Phone must be between 11 and 21 characters.',
            'debe ser una dirección de correo electrónico con formato correcto',
            'Message must be between 20 and 2000 characters.'
        ]); // Como no van a saltar todos los errores se le pasa un arreglo definido por extencion
    })


    /* it('Validar envío de form con data correcta', () => {
        cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type('Juan Pérez')
        cy.get('input[placeholder="Email"]').type('juan@gmail.com')
        cy.get('input[placeholder="Phone"]').type('35123696457')
        cy.get('input[placeholder="Subject"]').type('Reserva de habitación para fecha X')
        cy.get('[data-testid="ContactDescription"]').type('loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo')
        cy.get('#submitContact').click()
    }) */

    it('Validar envío de form con data correcta', () => {
        cy.log('Set de datos correctos...');
        cy.fillContactForm('Juan Pérez', 'juan@gmail.com', '35123696457', 'Reserva de habitación para fecha X', 'loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo');
        cy.get('#submitContact').click();
    })

})







