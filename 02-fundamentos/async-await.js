// datos
// estos arreglos son los mismos que están en el archivo de promesas
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
const id = 1;

const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre

        if (empleado) {
            resolve(empleado);

        } else {
            reject(`no existe el empleado con el id ${id}`);
        }
    });
    return promesa;
}


getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));


const getEmpleado2 = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;


        (empleado)
            ? resolve(empleado) //if
            : reject(`no existe el empleado con el id ${id}`); //else
    });
}
const id2 = 2;
getEmpleado(id2)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

//////////////////////////////////////////////////////////////////////////////////////

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`salario no existente para id ${id}`)
    });
}


// async await son terminos aplicados para las promesas.
// el await le dice, js espera hasta que tengas la respuesta de la promesa. una vez tengas el dato, lo ejecutas
// el await debe estar si o si dentro de una función async

// async es transformar la función para que regrese una promesa

// parte 1 - opción 1 sin manejador de error (without handler)
// const getInfoUsuario = async ()=>{
//     const empleado = await getEmpleado(id);
//     const salario = await getSalario(id);
//     return `El salario del empleado: ${empleado} es de ${salario}`
// }

// getInfoUsuario(id).then(msg=>console.log(msg))


// con el manejador de errores. acá se le aplica un try catch, eso es debido a que se necesita un catch para manejar el error en caso de inresar un parámetro incorrecto o que no esté

// para editar los parámetros, hay que ir a la linea 33 y cambiar el número
const getInfoUsuario = async ()=>{
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de ${salario}`
    } catch (error) {
        throw error;
        
    }
}

getInfoUsuario(id)
.then(msg=>{
    console.log('TODO BIEN!')
    console.log(msg)
}
    
    )
.catch(err => {
    console.log('TODO MAL')
    console.log(err)
});