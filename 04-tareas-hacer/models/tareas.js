// se importa el archivo y lo requerido para enlazar la app con los demás archivos js
const Tarea = require('./tarea'); 
// se crea una clase llamada Tareas. esta clase almacenará un listado, dicho listado y sus config estarán en el archivo "tarea.js"
class Tareas{
    _listado = {};

    // acá en js también existen los getter and setter como en java
    // se escribe como si fuera una función
    get listadoArr(){
        // ahora se crea un arreglo (array), la finalidad de esto, es que lo que se vaya anotando vaya quedando en el arreglo y sea más fácil de desestructurar / desestructurar = desarmar el arreglo para sacar los parámetros que a uno le interese
        const listado = [];
        // el object keys es un método que sirve para poder obtener datos de un arreglo - y aqui los datos que obtendremos, serán los de las de las tareas a realizar
        // el forEach es para poder barrer cada uno de los strings que hay
        Object.keys(this._listado).forEach(key=>{
            // console.log(key);
            // aqui se crea una const para obtener primero el código de tarea
            const tarea = this._listado[key]
            listado.push(tarea);
        });

        return listado;
    } // fin listadoArr - esto porsiacaso es síncrono, por lo que no necesita el tema del async await
    constructor(){
        this._listado = {};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }
}
module.exports = Tareas;