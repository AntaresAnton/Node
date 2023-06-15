require('colors');

const mostrarMenu = ()=>{
    return new Promise((resolve) => {
    console.clear();
    console.log('===================================='.green);
    console.log('     Seleccione una opción          '.green);
    console.log('====================================\n'.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tareas`);
    console.log(`${'0.'.green} Salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        // callback opt
        readline.question('selecione una opción: ', (opt)=>{
            readline.close();
            resolve(opt);
        })

    }); //fin promesa

} // fin mostrarMenu


const pausa = () =>{
    return new Promise((resolve) => {
        // en esta constante es donde se solicitará la respuesta a cada opción
    const readline = require('readline').createInterface({
        // leer sobre stdin y stdout
        input: process.stdin,
        output: process.stdout
    });
    // readline question... es para poder obtener un valor de acuerdo a lo que escriba el usuario. esto igual tiene un callback (el opt) la función del callback es ejecutarse una vez reciba la petición, que en este caso es esperar a que se es riba algo con algunas teclas 
    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`,(opt)=>{
        // con las llaves dentro de opt, se recibe algo muy similar a un Array. esto es sólo por motivos de pruebas
        // console.log({opt});
        // console.log(opt);

        readline.close();
        resolve();
    })
    }); //fin promesa
    
} // fin pausa

module.exports = {
    mostrarMenu, 
    pausa
}