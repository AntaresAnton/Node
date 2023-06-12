const fs = require('fs');

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
    const crearArchivo = async (base = 5) => {
        // header
        console.log('======================');
        console.log('   Tabla del:', base);
        console.log('======================');
    
        let salida = '';
        for (let i = 1; i <= 20; i++) {
            salida = salida += `${base} x ${i} = ${base * i}\n`
        }
        console.log(salida)
    
        // esta funcion por decirla de alguna manera ocupa node, siendo "fs" el parámetro de FileSystem. en conto esto lo que realiza es la creación de un archivo TXT que se llamará "tabla-5" y dentro de el archivo, se imprimirá la tabla de 5
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return`tabla-${base}.txt creada`;
    }
    module.exports = {
        crearArchivo
    }
} catch (err) {
    throw err;
}




