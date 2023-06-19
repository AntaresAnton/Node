const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        // lo bacán es que los valores en caso de necesitarlos como string o Number, se pueden hacer como arreglo de un arreglo jaja
        choices: [
            {
                value: 1,
                name: '1. Crear tarea'
            },
            {
                value: 2,
                name: '2. Listar tareas'
            },
            {
                value: 3,
                name: '3. Listar tareas completadas'
            },
            {
                value: 4,
                name: '4. Listar tareas Pendientes'
            },
            {
                value: 5,
                name: '5. Completar tarea(s)'
            },
            {
                value: 6,
                name: '6. Borra tarea'
            },
            {
                value: 0,
                name: '0. Salir'
            }
        ]
    }
]; //const preguntas
 
const inquirerMenu = async ()=>{
    // console.clear();
    console.log('===================================='.green);
    console.log('     Seleccione una opción          '.green);
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

// esto para poder utilizar la función en otro archivo js
module.exports={
    inquirerMenu,
    pausa,
    leerInput
}
