// se usará una librería llamada "axios". esta librería o paquete de node, sirve para poder realizar llamados a apis
const axios = require('axios');
// recordar... las clases van UpperCamelCase
class Busquedas {
    // array para el historial
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor(){
        // TODO: Leer DB en caso que exista
    }

    // función asíncrona para almacenar el lugar. este al ser string se le añaden las comillas simples
    async ciudad(lugar = ''){

        try {
            // peticion HTTP
        // console.log('Ciudad', lugar);
        const resp = await axios.get('https://reqres.in/api/users?page=2')
        console.log(resp.data);
        } catch (error) {
            console.log('No se encontró nada')
            return []; //retornar los lugaresque coincidan con el string que se ingresará
            
        }

        


    }
}


module.exports = {Busquedas};