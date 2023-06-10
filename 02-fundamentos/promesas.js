// datos
// estos arreglos son los mismos que están en el callback
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
// esta es la misma función que está en el callback hell porsiacaso pero se modificarán algunas cosas

// yap, en simplon, la promesa es lo siguiente
// a diferencia de los callback hell, la promesa se guia de 2 parámetros (quizá más, pero calmeilors).
// acá se utilizan 2, los cuales son resolve y reject 
const getEmpleado = (id) =>{
    const promesa = new Promise((resolve,reject) =>{
        // acá se usa por decirlo de alguna forma (sorry si no hay comas pero me dejan la cagá al comentar jajaj) el mismo llamado que el utilizado en el callback hell para buscar elementos de un array.
        const empleado = empleados.find(e => e.id === id)?.nombre

        // y acá viene lo interesante, a diferencia de usar un callback para realizar las consultas, se utilizan los parámetros anotados anteriorment
        if (empleado){
            resolve(empleado);

        }else{
            reject ( `no existe el empleado con el id ${id}`);
        }
    });
    return promesa;
}

// acá como constante se deja el número que queremos llamar, para que nos facilite un poco la vida
const id = 1;
getEmpleado(id)
    .then(empleado => console.log(empleado));


