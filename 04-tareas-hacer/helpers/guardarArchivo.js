// se importa la librería de filesystem
const fs = require('fs');

// se hace una constante para ahorrarnos de enrutar siempre, con esto nos queda el comodin para poder enturar el archivo
const archivo = './db/data.json';
// la ruta que contiene la const de arriba es HACIENDO SUPONER QUE AL LLAMAR AL ARCHIVO DESDE EL FICHERO APP.JS, LO DEBERÍA INTERPRETAR DE ESA FORMA, COMO SI FUERA PRINCIPAL

    // ***************************** GUARDAR ARCHIVO JSON *****************************

// se crea la constante con funcíon de flecha "duardarDB"
const guardarDB = (data)=>{
    fs.writeFileSync(archivo, JSON.stringify(data));
    // en el fs.writeFileSync se ve que hay un parseador, este parseador llamado JSON.stringify sirve para que la variable data(por decirlo para que se entienda) transforme la cadena del arreglo a String. para que prueben el ejemplo, descomenten esto de abajo, y dejen comentado lo de arriba. 
    // fs.writeFileSync(archivo,data);
}

// ***************************** LEER ARCHIVO JSON *****************************

// hacemos otra const para poder leer el archivo json
const leerDB = ()=>{
    
    // en esta condicionante, lo que quiere decir es que si el archivo json no existe, el programa no devolverá nada (que es como obvio jaja)
    // acá siempre que se agreguen funcionalidades de la librería FileSystemDirectoryEntry,se debe agregar el "path" del archivo
    if (!fs.existsSync(archivo)) {
        return null;
    }
    // de lo contrario, el sistema debe leerlo, interpretarlo como un archivo en formato utf-8
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    // la const data tiene un parámetro que dice json.parse. esto es para que se muestre el objeto con los corchetes (se convierta en un arreglo)
    const data = JSON.parse(info);
    // console.log(data);
    // acá igual se retorna null
    return data;

}


// el module.exports para poder ocupar las funciones de esta hoja en cualquier otra hoja del proyecto
module.exports = {
    guardarDB,
    leerDB
}