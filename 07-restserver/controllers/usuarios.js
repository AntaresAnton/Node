const { response, request } = require('express');

// información de usuario obtenida correctamente
const usuariosGet = (req = request, res = response) => {

    const {q,nombre,apikey} = req.query;


    res.json({
        msg: 'Get API - Controlador',
        q,
        nombre,
        apikey
    });
}
// info de usuario enviado correctamente
const usuariosPost = (req, res = response) => {

    // ojo , en la constante de abajo, se realiza un filtro condicional . eso quiere decir que al ingresar más datos de los solicitados, sólo ingresará los que se parametrizaron anteriormente, en este caso, el nombre y la edad. nada más. ahora si necesitamos añadir más datos, sólo se agregan en la desestructuración que está aqui abajito.
    const { nombre,edad } = req.body;

    res.status(201).json({
        msg: 'Post API',
        nombre,
        edad
    });
}
// usuario creado correctamente
const usuariosPut =  (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'Put API',
        id
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