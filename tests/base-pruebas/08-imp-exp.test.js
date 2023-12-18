import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";



describe('Probando el archivo 08-imp-exp', () => {


    test('getHeroeById debe de retornar un objeto', () => {

        const id = 1;

        const heroe = getHeroeById( id );

        expect( heroe ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });


    test('getHeroeById debe de retornar undefined si no existe', () => {

        const id = 10;

        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });


    test('getHeroesByOwner debe de retornar un arreglo de heroes de DC o Marvel', () =>{


        const owner  = "DC";

        const heroes = getHeroesByOwner( owner );

        if( owner === 'DC' ){

            expect( heroes.length ).toBe( 3 );

        }
        else {

            expect( heroes.length ).toBe( 2 );

        }

        heroes.map( heroe =>{

            expect( heroe.owner ).toBe( owner );

        })

    });


})