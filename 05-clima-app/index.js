// este paquete es para modificar las variables de entorno, permite alojar tokens
require('dotenv').config();
// Para llamar a las funciones de los archivos que se encuentran en las otras carpetas :)
const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer.js');
const { Busquedas } = require('./models/busquedas.js');

// este console log despliega el token de mapbox que está alojado en el archivo .env y que dotenv permite alojar
// console.log(process.env.MAPBOX_KEY);

// función asíncrona main
const main = async () => {
    // con la constante de abajo se llama a la clase que está ubicada en el archivo de modelo
    const busquedas = new Busquedas;
    let opt;

    // para el menú, se hace el do while, esto para que el menú pueda ser interactivo y restringir algunas cosas (condicionantes)
    do {
        // Funciones para desplegar menú
        opt = await inquirerMenu();
        
        // lo bacán, es que el switch funciona casi de la misma manera si uno está familiarizado con python
        switch (opt) {
            case 1:
                    // mostrar mensajes
                    const termino = await leerInput('Ciudad: ')
                    // console.log(lugar);


                    // buscar los lugares
                    // con el await de abajo, se llama a la clase "busquedas" (linea 8 del cod). esta llama a las busquedas del archivo "busquedas.js". va directo a la clase definida, y llega al "async ciudad" para obtener el resultado
                    const lugares = await busquedas.ciudad(termino);
                    
                    // seleccionar el lugar
                    const id = await listarLugares(lugares);
                    // este if lo que hace es que no genere un error en la app al cancelar una busquedas. para probarlo, sólo deben dejarlo comentado, buscar un lugar y cancelar. verán el error
                    if (id=== '0') continue

                    const lugarSel = lugares.find( l => l.id === id );
                    // console.log(lugarSel);
                    
                    // guardar en DB:
                    busquedas.agregarHistorial( lugarSel.nombre )


                    // Clima
                    // con esta constante hacemos lo siguiente. de la página de busquedas, llamamos a la func "climaLugar" en dicha función verán que hay 2 parámetros (latitud y longitud) y lo que hace esta const de abajo es enviar la latitud y longitud que nos proporciona mapbox (mediante lugarSet =lat y lng correspondientemente) haciendo que openweather nos entregue el clima de las coordenadas solicitadas :D
                    const clima = await busquedas.climaLugar(lugarSel.lat,lugarSel.lng );
                    // console.log(clima);

                    // Mostrar resultados
                    console.clear()
                    console.log('==================================='.green)
                    console.log('     Información de la ciudad');
                    console.log('==================================='.green)
                    console.log(`Ciudad: ${lugarSel.nombre.green}`);
                    console.log(`Lat:`,lugarSel.lat);
                    console.log(`Long:`,lugarSel.lng)
                    console.log(`Temperatura: `,clima.temp,'°C'.yellow)
                    console.log(`Mínima: `,clima.min,'°C'.yellow)
                    console.log(`Máxima: `,clima.max,'°C'.yellow)
                    console.log(`Como está el clima, ${clima.desc.green}`)
                    console.log(`Punto de referencia: ${clima.puntocercano.green}`)
                    // fin opción uno 
                break;
            case 2:
                    // historial

                break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);

}
main();