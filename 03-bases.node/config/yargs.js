// console.clear();
// con este codigo de abajo, llamamos a la librería Yargs
const argv = require ('yargs')
    // opcion de base
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es la base de la tabla de multiplicar'

    })  
    // opción para listar
    .option( 'l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    
    
    .check((argv,options)=>{
        // console.log('yargs', argv)
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
         return true;
    })
        .argv;

        // esto es para poder utilizar este archivo en el archivo principal, el cual sería "app"
    module.exports = argv;