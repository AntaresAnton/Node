// se importa el archivo y lo requerido para enlazar la app con los demás archivos js
const Tarea = require('./tarea'); 
// se crea una clase llamada Tareas. esta clase almacenará un listado, dicho listado y sus config estarán en el archivo "tarea.js"
class Tareas{
    _listado = {};


    constructor(){
        this._listado = {};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }
}
module.exports = Tareas;