// se crea la constante http
const http = require ('http');

// un callback que disparará diferentes argumentos, el request y el response, por ejemplo
http.createServer( (req,res) =>{
    // notas: request es lo que se está solicitando por parte del cliente. 
    // Response es lo que yo le responderé una vez procesado el request

    // console.log(req);
    // con lo de abajo se realiza el archivo en formato CSSMathValue, que se llamará "lista"
    res.setHeader('Content-Disposition', 'attachment; filename=Lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});
    // res.writeHead(200, {'Content-Type': 'application/json'})


    res.write('id, nombre \n');
    res.write('1, Patrick \n');
    res.write('2, María \n');
    res.write('3, Juan \n');
    res.write('4, Pedro \n');
    res.end();
})
// el listen es para colocar el puerto donde uno "jugará" con la app
.listen(4000);
console.log('escuchando en el puerto', 4000);
