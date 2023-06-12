// for (let i = 1; i <= 10; i++) {
//     let resultado = 5 * i;
//     console.log(`5 x ${i} = ${resultado}`);
//   }

// con esto se importa la librería de FileSystem. ojo que la constante puede llevar cualquier nombre, el "require" debe ser si o si 'fs' dado que es parámetro de node
const fs = require('fs');

console.clear();
console.log('======================');
console.log('     Tabla del: 5');
console.log('======================');
//   Otra forma
const base = 15;
let salida = '';
for(let i=1; i<=10; i++){
    salida = salida +=`${base} x ${i} = ${base *i}\n`
}
console.log(salida)

// esta funcion por decirla de alguna manera ocupa node, siendo "fs" el parámetro de FileSystem. en conto esto lo que realiza es la creación de un archivo TXT que se llamará "tabla-5" y dentro de el archivo, se imprimirá la tabla de 5
fs.writeFile(`tabla-${base}`,salida, (err)=>{
    if (err) throw err;
    console.log(`tabla-${base}.txt creada`)
})