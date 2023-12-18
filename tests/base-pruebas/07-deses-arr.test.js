import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";



describe('Pruebas en 07-deses-arr',() =>{

    test('debe de retornar un string y un numero',() =>{

        const [ letras, numeros ] = retornaArreglo();

        expect( typeof letras ).toBe( 'string' );
        expect( typeof numeros ).toBe( 'number' );

        expect( letras ).toEqual( expect.any( String ) );

    });

});