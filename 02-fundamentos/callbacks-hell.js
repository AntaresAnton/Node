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

];

// ahora realizaremos la función para obtener datos de los empleados{}

const getEmpleado = (id, callback) =>{
    // opción 1, esta es como la más tradicional
    // const empleado = empleados.find((e) =>{
    //     return e.id === id
    // })
    // opción 2, en caso que solo haya un return
    const empleado = empleados.find((e) => e.id === id )
    // acá colocaremos una condición, esto es para que sólo arroje resultados válidos, y en caso de ingresar un id incorrecto, este envíe un mensaje indicando que no existe :D

    if (empleado) {
        callback (empleado);
    }else{
        callback (`empleado con id ${id} no existe`);
    }
}
// console.log(getEMpleado(5));

getEmpleado(10, (empleado)=>{
    console.log(empleado);
})