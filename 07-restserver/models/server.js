// librería express
const express = require('express')

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

        // directorio publico
        this.app.use(express.static('public'))

    }

    // las rutas, para que queden ordenadas
    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World');
        })
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