// librería express
const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        // propiedad que queda en la misma clase del servidor
        this.app = express();
        // ecá va a ir el puerto como parámetro fijo
        this.port = process.env.PORT;

        // middlewares
        // los middlewares no son más que funciones que le agregan "otras funcionalidades" al webserver
        this.middlewares();

        // método rutas
        this.routes();
    }

    middlewares(){

        // CORS
        this.app.use(cors());

        // directorio publico
        // en esta carpeta se basará el html o frontend que haya para que se ejecute
        // para saber que son middlewares , en este caso es por que después de app habrá algun método o función seguida de un puntito (sorry la coma separada)
        // ejemplo = app.use = middleware
        this.app.use(express.static('public'));

    }

    // las rutas, para que queden ordenadas
    // CRUD RUTAS
    routes() {
        // aqui antiguamente estaban los middlewares de ruta . ahora están alojados en el directorio routes/user
        this.app.use('/api/usuarios', require('../routes/user'));
    }

    // método listen, en si, es todo lo que usualmente iba en el archivo principal, pero con la finalidad que quede más ordenado
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

// para poder desplegar las funciones y objetos de esta clase
module.exports = Server;