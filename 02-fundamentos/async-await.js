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

const id = 1;
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