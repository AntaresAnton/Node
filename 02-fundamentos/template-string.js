// esto es como lo normal que siempre se ha realizado para concatenar
console.clear();
console.log("esto es como lo normal que siempre se ha realizado para concatenar");
const nombre = 'DeadPool';
const real = 'Wade Winston';

const normal = nombre +  ' ' + real;

console.log(normal);

// ahora la otra forma es con el "template" esta es como más entrete

console.log("ahora la otra forma es con el template. Esta es como más entrete");

const nombre2 = 'DeadPool';
const real2 = 'Wade Winston';

const template = `${nombre2} ${real2}`
// las ventajas de los template string es que sirven para trabajar de una forma de desarrollo más fácil 

console.log(template);

// esto es para hacer una comprobación. recuerden que al colocar 3 signos iguales, es para una comparación precisa
console.log( normal === template);
// esto arroja TRUE


// definir como html
console.log("definir como html");
// esto solo lo hice pa que se vea con un espaciado adicional 
console.log(" ");
// en los template String, toma los enter como salto de línea, ojo con eso
const html= `
    <h1>Hola</h1>
    <p>Mundo</p>

`;
console.log(html);


// node --watch[ruta]