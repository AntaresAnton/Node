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
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));



// acá hay otro ejemplo que cumple la misma funcion que el codigo de arriba, se explica a continuación


    // el return que el codigo arriba lo tenia en la parte final en este caso lo tiene abajo del getEmpleado, ese es otro método más facil de interpetar para el codigo
    const getEmpleado2 = (id) =>{
        return new Promise((resolve,reject) =>{
            // acá se usa por decirlo de alguna forma (sorry si no hay comas pero me dejan la cagá al comentar jajaj) el mismo llamado que el utilizado en el callback hell para buscar elementos de un array.
            const empleado = empleados.find(e => e.id === id)?.nombre;
    
            // y acá viene lo interesante, a diferencia de usar un callback para realizar las consultas, se utilizan los parámetros anotados anteriormente

            // en este caso, el if y el else se sustituyen por signos.
            (empleado)
              ?  resolve(empleado) //if
               : reject ( `no existe el empleado con el id ${id}`); //else
        });
    }
    // acá como constante se deja el número que queremos llamar, para que nos facilite un poco la vida
    const id2 = 2;
    getEmpleado(id2)
        .then(empleado => console.log(empleado))
        .catch(err => console.log(err));

        //////////////////////////////////////////////////////////////////////////////////////

    const getSalario = (id)=>{
        return new Promise ((resolve,reject) =>{
            const salario = salarios.find(s =>s.id ===id)?.salario;
            (salario)
                ?resolve(salario)
                :reject(`salario no existente para id ${id}`)
        });
    }
// para obtener el resultado del salario
    getSalario(id2)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));

    // y esto es para obtener los datos completos
    // esto es solo un ejemlo funcional, descomentar para probar
    // getEmpleado(id)
    // .then(empleado=>{
    //     getSalario(id)
    //     .then(salario=>{
    //         console.log('el empleado',empleado, 'tiene de salario de', salario)
    //     })
    //     .catch(err => console.log(err));
    // })


    // PROMESAS EN CADENA
// ejemplo 1
    // getEmpleado(id)
    // .then(empleado=>{
    //     console.log(empleado);
    //     return getSalario(id)
    // })

    // ejemplo 2
    let nombre;
    getEmpleado(id)
    .then(empleado=>{
        nombre = empleado
        return getSalario(id)
    })
    .then(salario=> console.log('El empleado ', nombre, 'tiene un salario de:', salario))
    .catch(err=>console.log(err));