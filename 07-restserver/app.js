// paquetes o impportaciones de terceros
require('dotenv').config();
const Server = require('./models/server');

const server = new Server

// con esto llamamos al listen del archivo server (que está en la carpeta models)
server.listen();