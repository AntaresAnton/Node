// por buena practica, se recomienda usar más const que let o var

// variables, constantes 

// esta es la antigua variable. ya no se UserActivation, está deprecada. el tema es que esta variable de de ambito global
var nombre = 'wolverine';

if (true) {
   var nombre = 'magneto';
}
// console.log(nombre);
// esto así arroja finalmente "magneto" solamente

// ahora vamos a ver con let
let nombre = 'wolverine';

if (true) {

   let nombre = 'magneto';
   console.log(nombre);
}

console.log(nombre);
// la diferencia con el let, es que en la primera pasaba el ultimo dato (los var), ahora se le agregó un console.log dentro del if, para que despliegue los datos, ya que la variable del if no queda declarada con el let (esa es una gran diferencia como el var). para que vean la diferencia, pueden dejar comentada la linea 19 y probar


// ------------------otro caso más:------------------

let nombre = 'wolverine';

if (true) {

   nombre = 'magneto';
}

console.log(nombre);
// acá en el if se le elimina el let, para que quede como una variable normal, pero el if al tratar de buscar la variable, y cachar que está de las primeritas (linea 27) despliega en pantalla los datos que están en la linea 31

// ------------------------ CONSTANTES ------------------------

const nombre = 'wolverine';

if (true) {
// esto al ejecutarlo, sólo desplegará el nombre "wolverine"
   const nombre = 'magneto';
}

console.log(nombre);
// las constantes, como bien se dice, son valores que no tienden a cambiar, pero no por ello significa que no se pueden cambiar en caso de ser necesario
// las constantes con un mismo nombre se pueden crear en los scope, como en el ejemplo, el scope "if"