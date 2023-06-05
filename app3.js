// este codigo corre de una manera distinta, no corre de "arriba hacia abajo"
console.log('inicio de programa');  //01

setTimeout(() => {
    console.log('Primer Timeout') //05

}, 3000);

setTimeout(() => {
    console.log('Segundo Timeout') //03

}, 0);

setTimeout(() => {
    console.log('Tercer Timeout') //04

}, 0);

console.log('Fin de programa'); //02

// explicado con peras y manzanas por qué pasa eso:

// partamos primero en que hay 3 "secciones" en donde pasa el código:
//     -Pila de procesos (call stack)
//     -Node APIs
//     -Cola de Callbacks

// primero se ejecuta el "main" que es como el predeterminado que hay en la máquina que se esté ejecutando el código

// el primer console.log pasa a la pila de procesos y se ejecuta.
// Luego parte el ultimo console.log y se ejecuta. esto dado que son console log, y sólo tienen almacenados String, no son como los setTimeout

// después, el setTimeout que tiene los 3 segundos (sería en este caso el primer settimeout), se almacena en la "node api". esto debido a que al tener un tiempo debe esperar dichos segundos para poder "desplegarse en pantalla."

// luego de ello, los otros timeout restantes (que serían el 02 y el 03) se almacenan en la node AudioParam, pero estos al no tener un tiempo definido (están marcados con ceros) pasan a la "cola de callbacks". una vez dentro de la cola de callbacks, van a la pila de procesos y finalmente se despliegan en pantalla (se muestran en la consola)

// finalmente, al pasar los 3 segundos. el primer setTimeout se va a la cola de callbacks y finalmente a la pila de ProcessingInstruction. desplegandose en pantalla como el ultimo console.log.

// FINALMENTE ESTE ES EL ORDEN DE DESPLIEGUE EN CONSOLA:

// inicio de programa
// Fin de programa
// Segundo Timeout
// Tercer Timeout
// Primer Timeout