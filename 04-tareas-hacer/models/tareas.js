// se importa el archivo y lo requerido para enlazar la app con los demás archivos js
const Tarea = require('./tarea'); 
// se crea una clase llamada Tareas. esta clase almacenará un listado, dicho listado y sus config estarán en el archivo "tarea.js"
class Tareas{
    _listado = {};

    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea=>{
            this._listado[tarea.id] = tarea;

        })
        
    }

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

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    


    crearTarea(desc = ''){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    // esto es para obtener de manera ordenada el listado de tareas al presionarl la segunda opción
    listadoCompleto(){
        console.log();
        this.listadoArr.forEach((tarea,i)=>{
            const idx = `${i+1}`.green;
            // console.log(idx);
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                    ?'Completada'.green
                    : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`)
            
        });
    }

    listarPendientesCompletadas(completadas = true){
        console.log();
        let contador = 0;
        this.listadoArr.forEach(tarea=>{
            // console.log(idx);
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                    ?'Completada'.green
                    : 'Pendiente'.red;


                    if (completadas){
                        // mostrar completados
                        if(completadoEn){
                            contador +=1;
                            console.log(`${(contador + '.').green} ${desc} :: ${completadoEn}`);

                        }
                    }else{
                        // mostrar pendientes
                        if(!completadoEn){
                            contador +=1;
                            console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
                    }
                }
            
        });
    }

}
module.exports = Tareas;