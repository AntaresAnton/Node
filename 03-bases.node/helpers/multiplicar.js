const fs = require('fs');
console.clear();
// archivo importado para los colores en los console log
let colors = require('colors');
// sin el async await
// const crearArchivo = (base = 5) => {
//     // header
//     console.log('======================');
//     console.log('   Tabla del:', base);
//     console.log('======================');

//     let salida = '';
//     for (let i = 1; i <= 10; i++) {
//         salida = salida += `${base} x ${i} = ${base * i}\n`
//     }
//     console.log(salida)

//     // esta funcion por decirla de alguna manera ocupa node, siendo "fs" el parámetro de FileSystem. en conto esto lo que realiza es la creación de un archivo TXT que se llamará "tabla-5" y dentro de el archivo, se imprimirá la tabla de 5
//     fs.writeFileSync(`tabla-${base}`, salida);

//     console.log(`tabla-${base}.txt creada`)
// }
// module.exports = {
//     crearArchivo
// }


// Con Promesa



// con Async Await

try {
    // en esta constante es donde se almacenan los parámetros para poder jugar con la tabla. acá se pueden ingresar los siguientes parámetros:
    // base = acá se almacena el número que queremos que salga la tabla - si añadimos el 2, saldrá la tabla del 2
    // listar: esto hace que aparezca o no la lista de la tabla.
    // limite: este es el límite que queremos que aparezca la tabla. si agregamos por ej, el numero 20, saldrá hasta el 2x20
    const crearArchivo = async (base = 5, listar = false, limite = 10) => {
        // header
        
    
        let salida = '';
        let consola = '';
        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${'x'.red} ${i} = ${base * i}\n`
        }
        if(listar){
            console.log(colors.red('======================'));
            console.log(colors.green('   Tabla del:', base));
            console.log(colors.red('======================'));
            console.log(consola)
        }
        
    
        // esta funcion por decirla de alguna manera ocupa node, siendo "fs" el parámetro de FileSystem. en conto esto lo que realiza es la creación de un archivo TXT que se llamará "tabla-5" y dentro de el archivo, se imprimirá la tabla de 5
        fs.writeFileSync(`./03-bases.node/salida/tabla-${base}.txt`, salida);
        // sale mejor colocar la ruta precisa que ahorrarse un par de caracteres.
    
        return`tabla-${base}.txt creada`;
    }
    module.exports = {
        crearArchivo
    }
} catch (err) {
    throw err;
}

// console.log(colors.green('este es un texto verde'))
// console.log(colors.red('este es un texto Rojo'))