// for (let i = 1; i <= 10; i++) {
//     let resultado = 5 * i;
//     console.log(`5 x ${i} = ${resultado}`);
//   }
// con esto se importa la librería de FileSystem. ojo que la constante puede llevar cualquier nombre, el "require" debe ser si o si 'fs' dado que es parámetro de node
// en la constante de abajo, se llama al archivo "multiplicar" y a la función "creararchivo" con sus rutas respectivas
const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
// console.clear();
// con este codigo de abajo, llamamos a la librería Yargs
const argv = require ('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true

    })  .check((argv,options)=>{
        // console.log('yargs', argv)
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
         return true;
    })
        .argv;

// console.log(process.argv);
console.log(argv);
console.log('Base yargs: ', argv.b);



// console.log(process.argv);
// ahora realizaremos una desestructuración mediante una cachedDataVersionTag, ya que necesitamos el tercer argumento al invocar desde consola  '--base=5'
// lo que queremos hacer con EventSource, es que el codigo quede automatizado, y podamos ingresar parámetros desde consola para crear el listado de tablas que deseemos
const [ , ,arg3] = process.argv;
const [, base ] = arg3.split('=');
// console.log(base);

//   Otra forma
// const base = 50;



// // función crearArchivo, que se encuentra en el archivo "multiplicar.js"
crearArchivo(argv.b)
// y para asegurarnos que funcione bien vienen los respectivos then y catch
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));


