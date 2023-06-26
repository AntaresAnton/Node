// se importa FileSystemWritableFileStream, para guardar datos en DB
const fs = require('fs');
// se usará una librería llamada "axios". esta librería o paquete de node, sirve para poder realizar llamados a apis
const axios = require('axios');
// recordar... las clases van UpperCamelCase
class Busquedas {
    // array para el historial
    historial = [];
    // path o ruta de la base de datos
    dbPath = './db/database.json'

    constructor(){
        // TODO: Leer DB en caso que exista
        this.leerDB();

    }

    get paramsMapbox(){
        return{
            'access_token': process.env.MAPBOX_KEY, //token de acceso generado en mapbox
            'limit': 5, //limite de resultados de busqueda
            'language': 'es' //idioma de los resultados
        } 
    }

    // función asíncrona para almacenar el lugar. este al ser string se le añaden las comillas simples
    async ciudad(lugar = ''){
        // try catch para el tema de la api. recordar que se deben hacer try catch por el tema de solventar errores en caso que la api u otra cosa lo genere.
        try {
            // peticion HTTP
        // console.log('Ciudad', lugar);

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

        // const resp = await axios.get('')
        // porsiacaso, esto se saca del arreglo de la API. recuerden que los json al ser arreglos (literalmente hablando jaja) vienen "encasillados" con llaves y descripciones (arreglo del arreglo del arreglo y asi). acá lo que se hace es sacar todos los datos que contiene el "objeto" Features. lo cual son las caracteristicas de cada ciudad en cuanto a clima
        return resp.data.features.map(lugar =>({
            // la función map lo que hace es obtener datos de `arreglos de arreglos` esto es como sacar cajas de una caja que dentro tiene otra caja jaja
            id: lugar.id,
            nombre: lugar.place_name,
            lng: lugar.center[0],
            lat: lugar.center[1],
        }));


        } catch (error) {
            console.log('No se encontró nada')
            return []; //retornar los lugares que coincidan con el string que se ingresará
            
        }
    }
        // parámetros para interactuar con la API. para "desectructurar" la api, sirve el postman, así uno puede ver que caracteristicas extraer, y hacer dinámica la api
        // https://api.openweathermap.org/data/2.5/weather?lat=70.65045&lon=33.437776&appid=2979dab858d6a44f156a8cda74766124&lang=es&units=metric
    get paramsWeather(){
        return{
            'appid': process.env.WEATHER_KEY, //token de acceso generado en Weather
            'lang': 'es', //idioma de los resultados
            'units': 'metric',
        } 
    }
    get historialCapitalizado(){
        // capitalizar las palabras del historial
        // primero, el map regresa desestructurados los arreglos que estén en el historial (linea 8)
        return this.historial.map(lugar =>{
            let palabras = lugar.split(' ');
            palabras = palabras.map(p => p[0].toUpperCase() +  p.substring(1));
            return palabras.join(' ');
        });
    }


    // esto es para obtener los datos meteorológicos de la api del clima. así la primera api, nos arrona las coordenadas exactias, y realiza el llamado a la api de clima
    async climaLugar(lat,lon){

        try {
            

            //instance axios.create
            //resp data
            const instaceClima = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: {...this.paramsWeather,lat,lon},
            });

            const result = await instaceClima.get();
            // console.log(result);
            const {weather, main,name} = result.data;
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
                humedad: main.humidity,
                puntocercano: name,
            }
            

        } catch (error) {
            console.log(error);
        }

    }

    agregarHistorial(lugar = ''){
        
        if(this.historial.includes(lugar.toLowerCase())){
            return;
        }

        // esta condicionante es sólo para mantener 6 registros en el historial de Busquedas. ahi se puede editar o dejar comentada para que guarde todos los registros
        this.historial = this.historial.splice(0,5)

        this.historial.unshift(lugar.toLowerCase());

        // guardar en DB
        this.guardarDB();
    }
    
    guardarDB(){

        const payload = {
            historial: this.historial
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    }

    
    leerDB(){

        // debe de existir
        if (!fs.existsSync(this.dbPath)) return;
        
        // en esta condicionante, lo que quiere decir es que si el archivo json no existe, el programa no devolverá nada (que es como obvio jaja)
    // acá siempre que se agreguen funcionalidades de la librería FileSystemDirectoryEntry,se debe agregar el "path" del archivo
        // const info readfilesync path - encoding: utf-8
        const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
        // const data = JSON.(info)
         const data = JSON.parse(info);
        //  se le colocó data historial ya que el json tiene un parámetro principal, que se llama this.historial. 
        this.historial =  data.historial;
       
    }
    

}


module.exports = {Busquedas};