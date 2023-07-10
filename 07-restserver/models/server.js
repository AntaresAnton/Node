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
        // en esta carpeta se basará el html o frontend que haya para que se ejecute

        // para saber que son middlewares , en este caso es por que después de app habrá algun método o función seguida de un puntito (sorry la coma separada)
        // ejemplo = app.use = middleware
        this.app.use(express.static('public'))

    }

    // las rutas, para que queden ordenadas
    routes() {
        // información de usuario obtenida correctamente
        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'Get API'
            });
        })
        // info de usuario enviado correctamente
        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'Put API'
            });
        })
        // usuario creado correctamente
        this.app.post('/api', (req, res) => {
            res.status(201).json({
                msg: 'Post API'
            });
        })
        // usuario eliminado correctamente
        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'Delete API'
            });
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