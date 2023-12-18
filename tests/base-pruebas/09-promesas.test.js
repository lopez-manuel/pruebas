import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";



describe('Pruebas en 09-promesas', () =>{

    test('getHeroeByIdAsyc debe de retornar un heroe', (done) =>{ //done() para funciones asincronas

        const id = 1;

        getHeroeByIdAsync( id )
        .then( hero => {

            expect( hero ).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })

            done(); //done() para funciones asincronas

        });

    })



    test('getHeroeByIdAsyc debe de tener un error si heroe no existe', (done) =>{ //done() para funciones asincronas

        const id = 100;

        getHeroeByIdAsync( id )
        .then( hero => {

            expect( hero ).toBeFalsy();

            done(); //done() para funciones asincronas

        }).catch( error => {

            expect( error ).toBe( 'No se pudo encontrar el héroe ' + id );

            done();

        });

    })

})