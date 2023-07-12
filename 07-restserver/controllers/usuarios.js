const { response, request } = require('express');
const bcryptjs = require ('bcryptjs');
// con esto se llama al usuario de la carpeta models
const Usuario = require('../models/usuario');


// información de usuario obtenida correctamente
const usuariosGet = (req = request, res = response) => {

    const {q,nombre = "NoName",apikey,page = 1,limit = 10} = req.query;


    res.json({
        msg: 'Get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}
// info de usuario enviado correctamente
const usuariosPost = async (req, res = response) => {

    

    // ojo , en la constante de abajo, se realiza un filtro condicional . eso quiere decir que al ingresar más datos de los solicitados, sólo ingresará los que se parametrizaron anteriormente, en este caso, el nombre y la edad. nada más. ahora si necesitamos añadir más datos, sólo se agregan en la desestructuración que está aqui abajito.
    const {nombre,correo,password,rol} = req.body;

    const usuario = new Usuario({nombre, correo, password,rol});


    

    // Encriptar contraseña - HASH
    // el getsaltsync es para generar "vueltas" y de acuerdo a la cantidad de estas, va generando contraseñas más seguras. por defecto viene parametrizado en 10
    const salt = bcryptjs.genSaltSync();
    // esto de abajo hace que la contraseña sea encriptada mediante hash
    usuario.password = bcryptjs.hashSync(password, salt);

    // para guardar los datos en la DB
        await usuario.save();

    res.status(201).json({
        // msg: 'Post API - usuarios post',
        usuario
    });
}
// usuario creado correctamente
const usuariosPut =  async(req, res = response) => {

    const id = req.params.id;
    const { password, google, ...resto } = req.body;

    // TODO validar contra BBDD
    if (password){
        // Encriptar contraseña - HASH
        // el getsaltsync es para generar "vueltas" y de acuerdo a la cantidad de estas, va generando contraseñas más seguras. por defecto viene parametrizado en 10
        const salt = bcryptjs.genSaltSync();
        // esto de abajo hace que la contraseña sea encriptada mediante hash
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'Put API',
        usuario
    });
}
// usuario eliminado correctamente
const usuariosPatch =(req, res = response) => {
    res.json({
        msg: 'Patch API'
    });
}
// ejemplo para que muestre "patch"
const usuariosDelete =(req, res = response) => {
    res.json({
        msg: 'Delete API'
    });
}

// archivo exportación :D
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
};