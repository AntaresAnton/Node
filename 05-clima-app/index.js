///////////////////////////////////////////////////
const { leerInput } = require('./helpers/inquirer.js')

// función asíncrona
const main = async()=>{

    const texto =  await leerInput('Hola:  ');
    console.log(texto);

}


main();