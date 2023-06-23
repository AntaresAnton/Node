// console.clear();
// console.log('Inicio de programa');
// para llamar a la libreria de los colores


// se recomienda que primero vayan las importaciones de paquetes de terceros, y después las importaciones de archivos correspondientes a lo que uno está realizando
require('colors');
const { guardarDB,  leerDB } = require('./helpers/guardarArchivo');
// const {mostrarMenu,pausa} = require('./helpers/mensajes');
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar
        } = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');



// haremos una constante main

// breve reseña de las funciones asíncronas (en base a lo que he leido):
// las funciones asíncronas son las que están a la espera de que lleguen datos. uno puede interpretar por ejemplo que discord maneja tanto funciones sincronas y asincronas. las sincronas son por ejemplo cuanso uno está hablando en directo con una persona por voz. y la asíncrona es cuando te manda un mensaje por texto (y se te olvida abrirlo o no lo abres jaja)
const main = async()=>{
    // console.log('hola mundo');

    


    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB){ //establecer las tareas

        tareas.cargarTareasFromArray(tareasDB);

    }
    
    // ciclo do while, para hacer el bucle de opciones. y al tener el parámetro correcto o deseado, se detenga
    // acá mientras "opt" sea diferente de cero, pero como String, se seguirá ejecutando el ciclo
    
    do {
       opt = await inquirerMenu();
    //    console.log({opt});
    // ************* solo de ejemplo *************
    // const tareas = new Tareas();
    // const tarea = new Tarea('Comprar comida');
    // tareas._listado[tarea.id] = tarea;
    // ************* solo de ejemplo *************
    
    switch (opt) {
        case 1:
            // crear opcion
            const desc = await leerInput('Descripción: ');
            // console.log(desc);
            tareas.crearTarea(desc);
            
            break;

        case 2:
            tareas.listadoCompleto();
            // console.log(tareas.listadoArr);
            break;

        case 3: // listar completadas
        tareas.listarPendientesCompletadas(true);
       
        break;

        case 4: // listar pendientes
        tareas.listarPendientesCompletadas(false);
        
        break;

        case 6: // Borrar
        const id = await listadoTareasBorrar(tareas.listadoArr);
        // if (id !== '0'){}
        const ok = await confirmar('¿Está Seguro?');
        // TODO: preguntar si está seguro
        // console.log({ok});

        if (ok){
            tareas.borrarTarea(id);
            console.log('Tarea borrada correctamente');
        }
        
        
        break;
    }
    
    // esta función es la que se encarga de realizar el archivo json y dejarlo guardado en la carpeta "db"
    guardarDB(tareas.listadoArr);
    await pausa();
    

    } while (opt !== '0');
    

}

main();



