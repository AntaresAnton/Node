// datos
const empleados = [
    {
        id: 1,
        nombre: 'Patrick'
    },

    {
        id: 2,
        nombre: 'Linda'
    },

    {
        id: 3,
        nombre: 'Karen'
    }

];

const salarios = [
    {
        id: 1,
        salario: 1000
    },

    {
        id: 2,
        salario: 1500
    }
    // el salario del tercero no lo dejaremos

];

// ahora realizaremos la función para obtener datos de los empleados{}

const getEmpleado = (id, callback) =>{
    // opción 1, esta es como la más tradicional
    // const empleado = empleados.find((e) =>{
    //     return e.id === id
    // })
    // opción 2, en caso que solo haya un return

    // ojo en la linea de abajito, esto es muy similar a la estructura de un "join" en SQL, si ven BiquadFilterNode, se hace el const empleado. (que puede tener cualquier nombre. ) lo especial es después, cuando viene el "find" ahi pueden colocar cualquier letra (ahí aparece una E pero se le puede agregar cualquier CharacterData, ojo ahi). terminando con ello, donde se necesita buscar el id. este se termina almacenando en la (llamemosle variable) con letra E. a su vez, lo de la letra E se vá al const "empleado". y ahi es donde se puede jugar con ese dato almacenado :0 wuaaaaaaaaaaaaaaaaaaa
    const empleado = empleados.find((e) => e.id === id )
    // acá colocaremos una condición, esto es para que sólo arroje resultados válidos, y en caso de ingresar un id incorrecto, este envíe un mensaje indicando que no existe :D

    if (empleado) {
        // acá esto es algo entrete. como en getEmpleado aparece un  (10, (err, empleado) en la función de flecha, al imprimirlo con el console log, si el dato es válido, aparece una palabra de error. para corregir eso y que no aparezca esa palabra, se le debe añadir al callback de abajo la palabla null 
        callback (null,empleado);
    }else{
        callback (`empleado con id ${id} no existe`);
    }
}
// console.log(getEMpleado(5));

getEmpleado(1, (err, empleado)=>{
    // arribita le agregamos un parámetro llamado "err" para hacer una condicional

    if (err) {
        console.log('error');
       return console.log(err);
    }
    console.log('empleado existe')
    console.log(empleado);
})

// Nota interna:
// si comentáramos el if, retornaría un resultado "undefined" esto es por que JS, al nosotros enviarle algo, el igual nos debería dar una respuesta. y donde acá se están buscando datos de los arreglos, si se ingresa un ID que no existe, dirá "undefined"