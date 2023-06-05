// en la constante deadpool, se almacenarán los siguientes datos: Nombre - Apellido - Poder.
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // agregamos la edad
    // edad: 50,
    // acá se crea una función que buscará esos 3 parámetros (nombre, apellido y poder)
    getNombre(){
        // y acá se realiza mediante el template String, para simplificarnos la Vida. dado que sólo se coloca el signo peso y los respectivos parámetros mencionados.
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }

}
console.log(deadpool.getNombre())
// recuerden ejecutar en la consola (ctrl + shift + Ñ)
// esto arrojará "wade windston regeneracion"

// ==================== parte 2 ====================
// acá se crearán las variables siguiendo la misma lógica de arriba.

// las variables rescatarán los parámetros indicados en la const.deadpool
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// console.log(nombre,apellido,poder)
// dejando así el codigo, deberia imprimirse 2 veces Wade Winston Regeneración, ya que seimprime tanto la linea 13 como la linea 25

// esta es otra forma de obtener los datos de la const deadpool (linea 2)
const {nombre, apellido, poder, edad = 0} = deadpool;
// hacerlo de esta forma es mucho más facil de leer y más óptimo
console.log(nombre,apellido,poder,edad);
// acá esto lo mostraría como undefined la variable edad, ya que no tiene parámetros asignados. lo bacán es que puedo agregarle un parámetro dentro de la misma para que no me arroje el mensaje "undefined"

// ojo que al final se agrega la edad como parámetro al principio del codigo, y eso hace que lo que está en la linea 33 se sustituya.



// PARA TENER UNA REFERENCIA PROPIA NO MÁS..
// LA CONST DEADPOOL ES UN OBJETO, ESE OBJETO TIENE 3 VARIABLES, DICHAS VARIABLES SE PUEDEN ESTRAER DE DIFERENTES MANERAS, SIENDO LA MÁS FÁCIL LA "const {nombre, apellido, poder} = deadpool;"

////////////////////////////////////////////////////////////////////////////////////////////


// OTRA OPCION DE DESESTRUCTURACIÓN
// en simple, se crea una función que extraiga los datos de una const. dicha función puede estraer datos de cualquier const. ojo ahí.
function imprimeHeroe(heroe){
    const {nombre, apellido, poder, edad = 0} = heroe;
    // hacerlo de esta forma es mucho más facil de leer y más óptimo
    console.log(nombre,apellido,poder,edad);
}
// y ahora se "utiliza" la función para que extraiga los datos de la const deadpool
imprimeHeroe(deadpool);
// en la linea 52 se hace el llamado a todo lo que está en la linea 48 a la 52, pero en el paréntesis se le coloca "deadpool" para que la funcion extraiga los datos de la constante deadpool (linea 2 a linea 14)


// otra forma de desestructuración muy similar a la de arriba.

// lo que cambia acá es que en vez de la constante que había anteriormente, la cual contenía los datos a extraer se elimina, y en lugar de la función se agregan los datos
function imprimeHeroe2({nombre, apellido, poder, edad = 0}){
    // hacerlo de esta forma es mucho más facil de leer y más óptimo
    console.log("nombre,apellido,poder,edad");
    console.log(nombre,apellido,poder,edad);
}
// y ahora se "utiliza" la función para que extraiga los datos de la const deadpool
imprimeHeroe2(deadpool);
// ojo que en esta desestructuración, si se agrega un valor dentro de la función, reemplaza de forma automática dicho valor. ejemplo:


function imprimeHeroe3({nombre, apellido, poder, edad = 0}){
    // hacerlo de esta forma es mucho más facil de leer y más óptimo
    nombre = 'Patrick'
    console.log("reemplaza nombre");
    console.log(nombre,apellido,poder,edad);
}
// y ahora se "utiliza" la función para que extraiga los datos de la const deadpool
imprimeHeroe3(deadpool);



// ARREGLOS - arrays
// se crea un arreglo simple con 3 parámetros. ojo que al igual que en Python, los arreglos parten de cero
const heroes = ['Deadpool', 'Superman', 'Batman']
// se crean 3 const para poder desglosar el arreglo
const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];
console.log(h1, h2,h3);
// esto debería arrojar el primer ítem del arreglo (Deadpool)


// otra forma de desestructurar un arreglo

const heroes2 = ['Deadpool', 'Superman', 'Batman']
// se crean 3 const para poder desglosar el arreglo
const [ , ,h6] = heroes2;
console.log(h6);
// en este ejemplo, sólo queremos mostrar en pantalla "batman" pero donde está de los terceros, hay que colocar comas para que el sistema asimile que sólo queremos el de la tercera posición. y obviamente, en el console log colocar lo mismo, que sólo necesitamos extraer uno