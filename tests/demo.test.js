
describe('Pruebas en <DemoComponent />', () => {

    test('Esta prueba no debe fallar', () => { 
        //1. Inicializacion
        const mensaje1 = 'Hola mundo';
        // 2. estimulo
        const mensaje2 = mensaje1.trim();
    
        // 3. Observar el comportamiento... esperado
        expect( mensaje1 ).toBe( mensaje2 );
    })

})
