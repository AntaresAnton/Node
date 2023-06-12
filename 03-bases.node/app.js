// for (let i = 1; i <= 10; i++) {
//     let resultado = 5 * i;
//     console.log(`5 x ${i} = ${resultado}`);
//   }
// con esto se importa la librería de FileSystem. ojo que la constante puede llevar cualquier nombre, el "require" debe ser si o si 'fs' dado que es parámetro de node
// en la constante de abajo, se llama al archivo "multiplicar" y a la función "creararchivo" con sus rutas respectivas
const {crearArchivo} = require('./helpers/multiplicar');
console.clear();

//   Otra forma
const base = 4;

crearArchivo(base);