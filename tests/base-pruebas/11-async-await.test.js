
import { getImagen } from "../../src/base-pruebas/11-async-await";

//si la version de node es inferior a la 18 hay que hacer un arreglo
//ya que no tienen el fetch api


describe('Probando el archivo 11-async-await', () =>{

    test('getImagen debe de devolver un string', async () =>{

        const url = await getImagen();

        expect( typeof url ).toBe('string');

    });

});