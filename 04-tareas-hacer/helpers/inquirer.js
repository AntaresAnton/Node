const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        // lo bacán es que los valores en caso de necesitarlos como string o Number, se pueden hacer como arreglo de un arreglo jaja
        // para cambiarle color a los números hay que hacer backstrings en el respectivo nombre, y luego agregar los llamados template strings ${} e ingresar los parámetros requeridos
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: 2,
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: 3,
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: 4,
                name: `${'4.'.green} Listar tareas Pendientes`
            },
            {
                value: 5,
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: 6,
                name: `${'6.'.green} Borra tarea`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            }
        ]
    }
]; //const preguntas
 
// imprimir el menú
const inquirerMenu = async ()=>{
    // console.clear();
    console.log('===================================='.green);
    console.log('     Seleccione una opción          '.white);
    console.log('====================================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
} //const inquirerMenu


// con esta const lo que hacemos es poder ejecutar el texto que aparece más abajo, (? Presione enter para continuar)
const pausa = async() =>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar` 
        }
    ];
    console.log('\n')
    await inquirer.prompt(question)
} // fin const pausa


// nueva función para realizar prompts en el menu
const leerInput = async(message)=>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            // acá en el validate, se le agrega un if para forzar a que se ingresen caracteres, de lo contrario,si el campo queda vacío, arrojará error
            validate(value){
                if (value.length === 0 ) {
                    return 'Por favor, ingrese un valor';
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}

// se crea el método para borrar las Tareas. esto se realizará casi de la misma forma que arriba

const listadoTareasBorrar = async (tareas = [])=>{

    // el metodo map lo que hace es retornar un nuevo arreglo, pero transformando a los hijos de este arreglo
    const choices = tareas.map((tarea,i)=>{

        const idx = `${i+1}.`.green;
        return {
            value: tarea.id,
            name : `${idx} ${tarea.desc}`
        }
    });
    // console.log(choices); 

    // esto es para devolverse y no borrar nada
    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
        
    });
    
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    return id;

}

const confirmar = async(message)=>{

    const question = [
        {
            type: 'confirm', // yes | no
            name: 'ok', // imprime un ol
            message // al estar vacío se concatena con el ok del archivo app (ver "case 6" en el archivo app)
        }
    ];
    const {ok} = inquirer.prompt(question);
    return ok;
}




const mostrarListadoChecklist = async (tareas = [])=>{

    // el metodo map lo que hace es retornar un nuevo arreglo, pero transformando a los hijos de este arreglo
    const choices = tareas.map((tarea,i)=>{

        const idx = `${i+1}.`.green;
        return {
            value: tarea.id,
            name : `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn)? true : false
        }
    });
    // console.log(choices); 

    
    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(pregunta);
    return ids;

}




// esto para poder utilizar la función en otro archivo js
module.exports={
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}
