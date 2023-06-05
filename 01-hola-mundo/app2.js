// para ejecutar en node, escribir en la consola (de visual studio ojalá) = node app2

// función de flecha
// esta  función va a invocar a la variable "nombre"
const saludar = (nombre) =>{
    // en el return, al escribirlo de esa manera, uno se ahorra lo que se hacía antes como por ejemplo 'saludos' + nombre
    return `Saludos ${nombre}`;
}
// en el console.log se le asigna un string para mostrar - complementar la const. 
console.log(saludar('Patrick'));
// al ejecutar diría "saludos Patrick"