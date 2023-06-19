// se importa la librería uuidv4, esta librería permite crear códigos únicos a nivel mundial. esos códigos se utilizarán como identificadores de cada tarea a realizar
const { v4: uuidv4 }= require('uuid')
class Tarea{
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }
}
// con esto podemos utilizar estas funciones y constructores etc en otra hoja de js
module.exports = Tarea;