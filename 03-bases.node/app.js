// for (let i = 1; i <= 10; i++) {
//     let resultado = 5 * i;
//     console.log(`5 x ${i} = ${resultado}`);
//   }
// con esto se importa la librería de FileSystem. ojo que la constante puede llevar cualquier nombre, el "require" debe ser si o si 'fs' dado que es parámetro de node
// en la constante de abajo, se llama al archivo "multiplicar" y a la función "creararchivo" con sus rutas respectivas
const { options, demandOption } = require('yargs');
// archivo importado de multiplicar.js
const {crearArchivo} = require('./helpers/multiplicar');
// archivo importado de yargs.js
const argv = require('./config/yargs')

// acá anteriormente estaba lo que ahora está en el archivo "yargs"


// console.log(process.argv);
// console.log(argv);
// console.log('Base yargs: ', argv.b);



// console.log(process.argv);
// ahora realizaremos una desestructuración mediante una cachedDataVersionTag, ya que necesitamos el tercer argumento al invocar desde consola  '--base=5'
// lo que queremos hacer con EventSource, es que el codigo quede automatizado, y podamos ingresar parámetros desde consola para crear el listado de tablas que deseemos
const [ , ,arg3] = process.argv;
const [, base ] = arg3.split('=');
console.log(base);

//   Otra forma
// const base = 50;



// // función crearArchivo, que se encuentra en el archivo "multiplicar.js"
crearArchivo(argv.b, argv.l, argv.h)
// y para asegurarnos que funcione bien vienen los respectivos then y catch
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
    
    // PARA EJECUTAR LA APP AÑADIR LO SIGUIENTE EN CONSOLA:
    // node [ruta del archivo] app -b 10 -l -h 20
    // esto es solo un ejemplo, y como resultado, arrojará la tabla del 10 en una lista hasta que llegue al 10x20 = 200