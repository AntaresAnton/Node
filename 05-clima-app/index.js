// Para llamar a las funciones de los archivos que se encuentran en las otras carpetas :)
const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer.js');
const { Busquedas } = require('./models/busquedas.js');

// función asíncrona main
const main = async () => {
    // con la constante de abajo se llama a la clase que está ubicada en el archivo de modelo
    const busquedas = new Busquedas
    let opt;

    // para el menú, se hace el do while, esto para que el menú pueda ser interactivo y restringir algunas cosas (condicionantes)
    do {
        // Funciones para desplegar menú
        opt = await inquirerMenu();
        
        // lo bacán, es que el switch funciona casi de la misma manera si uno está familiarizado con python
        switch (opt) {
            case 1:
                    // mostrar mensajes
                    const lugar = await leerInput('Ciudad: ')
                    // console.log(lugar);
                    await busquedas.ciudad(lugar);
                    // buscar los lugares

                    // seleccionar el lugar

                    // Clima

                    // Mostrar resultados
                    console.log('\nInformación de la ciudad\n'.green);
                    console.log('Ciudad:, ');
                    console.log('Lat:, '.yellow);
                    console.log('Long:, '.yellow)
                    console.log('Temperatura:, ')
                    console.log('Mínima:, ')
                    console.log('Máxima:, ')
                    // fin opción uno 
                break;
            case 2:

                break;
            case 3:

                break;

            default:
                break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);

}
main();